import { useEffect, useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Button, CircularProgress, Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Data } from "./bot_hashes.js";
import { BotNft } from "../../components/botNft";
import * as anchor from "@project-serum/anchor";
import jQuery from 'jquery';

import { LAMPORTS_PER_SOL, AccountInfo } from "@solana/web3.js";

import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import { programs } from "@metaplex/js";

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from "./candy-machine";

const ConnectButton = styled(WalletDialogButton)`
  padding: 16px 22px!important;
  border-radius: 5px!important;
  background-color: #16B1F3!important;
  color: #FFFFFF!important;
  font-weight: 600!important;
  font-size: 18px!important;
  font-family: Share Tech Mono!important;
  outline: none!important
  border: none!important;
  transition: all 220ms ease-in-out!important;
  cursor: pointer!important;
  text-align: center!important;

  &:hover {
    background-color: #000000!important;
    border: none!important;
    color: #FFFFFF!important;
  }
`;
const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    min-height: 1800px;

  }
`;

const BotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 480px) {
    min-height: 1800px;

  }
`;

const DataRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 480px) {
    min-height: 1800px;

  }
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 400;
  color: #FFFFFF;
  font-family: Share Tech Mono;
  align-items: center;

  @media screen and (max-width: 480px) {
  font-size: 28px;
}
`;

const DataContainer = styled.div`
  padding: 10px;
  margin: 15px;
  position=relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #FFFFFF!important;
  border: 2px solid;
  font-size: 22px!important;
  font-family: Share Tech Mono!important;
  height: 90px;
  width: 275px;
`;

const MetadataContainer = styled.div`
  padding: 10px;
  margin: 15px;
  position=relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #FFFFFF!important;
  border: 2px solid;
  font-size: 14px!important;
  font-family: Share Tech Mono!important;
`;

const MetadataWrapRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;

  @media screen and (max-width: 480px) {
    min-height: 1800px;

  }
`;


const MintButton = styled(Button)``;


const TOKEN_PROGRAM_ID = new anchor.web3.PublicKey(
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
);

const METADATA_PROGRAM_ID = new anchor.web3.PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

// const MINT_KEY = new anchor.web3.PublicKey(
//   "34s8cCyb77TQEojCHzxToPa6f9HarEXTPcyMT3GDsGYH"
// );

const {
  metadata: { Metadata }
} = programs;

// const metadata = await Metadata.load(connection, metadataAccount);
export const Details = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #000000;
  font-family: Share Tech Mono;
  margin-left: 5%;
  margin-right: 10%;


  @media screen and (max-width: 480px) {
  font-size: 14px;
  margin-left: 5%;
  margin-right: 9%;
}
`;

const BotImg = styled.img`
  width: 12em;
  height: 16em;
`;

export interface HomeProps {
  connection: anchor.web3.Connection;
}

type BotType = {
  name: string;
  uri: string;
  attributes: string[];
}


const Home = (props: HomeProps) => {
  const [balance, setBalance] = useState<number>();
  const [metadataAccount, setMetadataAccount] = useState<string>();
  const [metadataInfo, setMetadataInfo] = useState<string>();
  const [uri, setUri] = useState<string>();
  const [pngUri, setPngUri] = useState<string>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [pngUriList, setPngUriList] = useState<any[]>();
  const [botMetadataList, setBotMetadataList] = useState<BotType[]>();
  const [accountInfo, setAccountInfo] = useState<null | AccountInfo<Buffer>>();
  const [walletTokens, setWalletTokens] = useState<any[]>();
  const [botTokens, setBotTokens] = useState<any[]>();
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: "",
    severity: undefined,
  });

  const wallet = useAnchorWallet();

  const valid2DList = Data

  const png2DList : string[] = [];
  const name2DList : string[] = [];

  const botData : BotType[] = [];


  const getMetadata = () => {
    (async () => {

    if (!wallet) return;

    if (botTokens) {
    for (const id of botTokens) {

      const MINT_KEY = new anchor.web3.PublicKey(
        id
      );
      const pdaAccount = await anchor.web3.PublicKey.findProgramAddress([Buffer.from('metadata'), METADATA_PROGRAM_ID.toBuffer(),MINT_KEY.toBuffer()],METADATA_PROGRAM_ID)

      setMetadataAccount(pdaAccount[0].toString())

      const metadata = await Metadata.load(props.connection, pdaAccount[0].toString());

      setMetadataInfo(metadata.toString())
      setUri(metadata.data.data.uri.toString())

      console.log(metadata)
      console.log(metadata.data.data.uri.toString())

      const arweaveData = await jQuery.getJSON(metadata.data.data.uri.toString())
      const arweaveDataName = arweaveData.name
      const arweaveDataAttributes = arweaveData.attributes
      console.log("arweave data")
      console.log(arweaveData)
      console.log(arweaveData.image)
      console.log("name")
      console.log(arweaveDataName)
      console.log("attributes")
      console.log(arweaveDataAttributes)

      setPngUri(arweaveData.image.toString())
      png2DList.push(arweaveData.image.toString())

      // setPngUriList(png2DList => [...png2DList, arweaveData.image.toString()]);
      // setPngUriList({
      //   png2DList: this.state.png2DList.concat(arweaveData.image.toString())
      // })
      // png2DList.concat(arweaveData.image.toString())

      console.log("2D list")
      console.log(png2DList)
  }}

  })();
};

  // const getArweaveData = (uri) => {
  //   const arweaveData = jQuery.getJSON(uri)
  //   console.log("arweave data")
  //   console.log(arweaveData)
  //   console.log(arweaveData.image)
  //
  //   setPngUri(arweaveData.image.toString())
  //   // return arweaveData
  // }

  // useEffect(getMetadata, [wallet, props.connection]);
  // useEffect(getArweaveData, [wallet, props.connection]);

  // useEffect(() => {
  //   getArweaveData(uri)
  // });
/*
  useEffect(() => {
  (async () => {
    if (wallet) {

      const pdaAccount = await anchor.web3.PublicKey.findProgramAddress([Buffer.from('metadata'), METADATA_PROGRAM_ID.toBuffer(),MINT_KEY.toBuffer()],METADATA_PROGRAM_ID)

      console.log(pdaAccount[0].toString())
      setMetadataAccount(pdaAccount[0].toString())

      const metadata = await Metadata.load(props.connection, pdaAccount[0].toString());

      console.log(metadata)
      console.log(metadata.data.data.uri)
      setMetadataInfo(metadata.toString())
      setUri(metadata.data.data.uri.toString())


      // const arweaveData = await jQuery.getJSON(metadata.data.data.uri)
      // console.log(arweaveData)
    }
  })();
  }, [props.connection]);
*/

  useEffect(() => {
  (async () => {
    if (wallet) {
      const balance = await props.connection.getBalance(wallet.publicKey);
      setBalance(balance / LAMPORTS_PER_SOL);
    }
  })();
  }, [wallet, props.connection]);


  useEffect(() => {
  (async () => {
    if (wallet) {
      const accounts = await props.connection.getParsedTokenAccountsByOwner(
        wallet.publicKey,
        { programId: TOKEN_PROGRAM_ID }
      );

      const tokenAddresses = accounts.value
        .filter((account) => {
          return account.account.data.parsed.info.tokenAmount.uiAmount != 0;
        })
        .map((account) => {
          return account.account.data.parsed.info.mint;
        });

      const botAddresses = tokenAddresses
        .filter((address) => {
          return valid2DList.indexOf(address) > -1;
        })

      console.log("bot addresses")
      console.log(botAddresses)

      console.log("token addresses")
      console.log(tokenAddresses)
      setBotTokens(botAddresses)
      setWalletTokens(tokenAddresses)

      // if (botTokens) {
      for (const id of botAddresses) {
        setIsLoaded(false);

        const MINT_KEY = new anchor.web3.PublicKey(
          id
        );
        const pdaAccount = await anchor.web3.PublicKey.findProgramAddress([Buffer.from('metadata'), METADATA_PROGRAM_ID.toBuffer(),MINT_KEY.toBuffer()],METADATA_PROGRAM_ID)

        setMetadataAccount(pdaAccount[0].toString())

        const metadata = await Metadata.load(props.connection, pdaAccount[0].toString());

        setMetadataInfo(metadata.toString())
        setUri(metadata.data.data.uri.toString())

        console.log(metadata)
        console.log(metadata.data.data.uri.toString())

        const arweaveData = await jQuery.getJSON(metadata.data.data.uri.toString())
        const arweaveDataName = arweaveData.name
        const arweaveDataAttributes = arweaveData.attributes

        // const arweaveDataArray
        console.log("arweave data")
        console.log(arweaveData)
        console.log(arweaveData.image)
        console.log("name")
        console.log(arweaveDataName)
        console.log("attributes")
        console.log(arweaveDataAttributes)

        botData.push(
          {
            name: arweaveDataName,
            uri: arweaveData.image.toString(),
            attributes: arweaveDataAttributes
          }
        )

        console.log("BOT DATA ARRAY")
        console.log(botData)

        setPngUri(arweaveData.image.toString())
        png2DList.push(arweaveData.image.toString())
        // name2DList.push()
        setBotMetadataList(botData)
        setPngUriList(png2DList)



        // setPngUriList(png2DList => [...png2DList, arweaveData.image.toString()]);
        // setPngUriList({
        //   png2DList: this.state.png2DList.concat(arweaveData.image.toString())
        // })
        // png2DList.concat(arweaveData.image.toString())

        console.log("2D list")
        console.log(png2DList)
    }

    setIsLoaded(true);
    console.log("FINAL 2D list")
    console.log(pngUriList)
    }
  })();
  }, [wallet, props.connection]);

  // useEffect(getMetadata, [wallet, props.connection]);

  return (
    <main>
      <Heading>
        <Title> My Robots </Title>
        {!wallet ? (
          <ConnectButton>Connect Wallet</ConnectButton>
        ) : (
          <BotContainer>
          <DataRow>
          {wallet && (
            <DataContainer>Wallet {shortenAddress(wallet.publicKey.toBase58() || "")}</DataContainer>
          )}

          {wallet && <DataContainer>Balance: {(balance || 0).toLocaleString()} SOL</DataContainer>}
          </DataRow>
          {wallet && !isLoaded && <CircularProgress />}

          <MetadataWrapRow>
          {wallet && isLoaded && botMetadataList && botMetadataList.map(({ name, uri, attributes }) => <BotNft name={name} imgUrl={uri} attributeArray={attributes} />)}
          </MetadataWrapRow>
          </BotContainer>
        )}
      </Heading>
    </main>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

export default Home;
