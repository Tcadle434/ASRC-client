import { useEffect, useState } from "react";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import { Data } from "./bot_hashes.js";
import { BotNft } from "../../components/botNft";
import * as anchor from "@project-serum/anchor";
import jQuery from 'jquery';
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useAnchorWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import { programs } from "@metaplex/js";
import { shortenAddress } from "./candy-machine";


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
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

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

const MetadataWrapRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  @media screen and (max-width: 480px) {
    min-height: 1800px;

  }
`;

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

const TOKEN_PROGRAM_ID = new anchor.web3.PublicKey(
  "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
);

const METADATA_PROGRAM_ID = new anchor.web3.PublicKey(
  "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
);

const {
  metadata: { Metadata }
} = programs;

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
  const [robotCount, setRobotCount] = useState<number>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [pngUriList, setPngUriList] = useState<any[]>();
  const [botMetadataList, setBotMetadataList] = useState<BotType[]>();

  const wallet = useAnchorWallet();
  const valid2DList = Data
  const png2DList : string[] = [];
  const botData : BotType[] = [];


//   const getMetadata = () => {
//     (async () => {
//
//     if (!wallet) return;
//
//     if (botTokens) {
//     for (const id of botTokens) {
//       setIsLoaded(false);
//
//       const MINT_KEY = new anchor.web3.PublicKey(
//         id
//       );
//       const pdaAccount = await anchor.web3.PublicKey.findProgramAddress([Buffer.from('metadata'), METADATA_PROGRAM_ID.toBuffer(),MINT_KEY.toBuffer()],METADATA_PROGRAM_ID)
//
//       const metadata = await Metadata.load(props.connection, pdaAccount[0].toString());
//
//
//       console.log(metadata)
//       console.log(metadata.data.data.uri.toString())
//
//       const arweaveData = await jQuery.getJSON(metadata.data.data.uri.toString())
//       const arweaveDataName = arweaveData.name
//       const arweaveDataAttributes = arweaveData.attributes
//
//       // const arweaveDataArray
//       console.log("arweave data")
//       console.log(arweaveData)
//       console.log(arweaveData.image)
//       console.log("name")
//       console.log(arweaveDataName)
//       console.log("attributes")
//       console.log(arweaveDataAttributes)
//
//       botData.push(
//         {
//           name: arweaveDataName,
//           uri: arweaveData.image.toString(),
//           attributes: arweaveDataAttributes
//         }
//       )
//
//       console.log("BOT DATA ARRAY")
//       console.log(botData)
//
//       png2DList.push(arweaveData.image.toString())
//       setBotMetadataList(botData)
//       setPngUriList(png2DList)
//
//
//       console.log("2D list")
//       console.log(png2DList)
//   }}
//
//   })();
// };


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

      var numRobos = 0

      // if (botTokens) {
      for (const id of botAddresses) {
        setIsLoaded(false);

        const MINT_KEY = new anchor.web3.PublicKey(
          id
        );
        const pdaAccount = await anchor.web3.PublicKey.findProgramAddress([Buffer.from('metadata'), METADATA_PROGRAM_ID.toBuffer(),MINT_KEY.toBuffer()],METADATA_PROGRAM_ID)

        const metadata = await Metadata.load(props.connection, pdaAccount[0].toString());


        console.log(metadata)
        console.log(metadata.data.data.uri.toString())

        const arweaveData = await jQuery.getJSON(metadata.data.data.uri.toString())
        const arweaveDataName = arweaveData.name
        const arweaveDataAttributes = arweaveData.attributes

        // const arweaveDataArray
        // console.log("arweave data")
        // console.log(arweaveData)
        // console.log(arweaveData.image)
        // console.log("name")
        // console.log(arweaveDataName)
        // console.log("attributes")
        // console.log(arweaveDataAttributes)

        botData.push(
          {
            name: arweaveDataName,
            uri: arweaveData.image.toString(),
            attributes: arweaveDataAttributes
          }
        )

        png2DList.push(arweaveData.image.toString())
        numRobos = numRobos + 1
        setRobotCount(numRobos)
        setBotMetadataList(botData)
        setPngUriList(png2DList)
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

          {wallet && <DataContainer>Total Robots: {(robotCount || 0).toLocaleString()}</DataContainer>}

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

export default Home;
