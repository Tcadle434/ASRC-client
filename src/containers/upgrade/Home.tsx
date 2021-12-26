import { useEffect, useState } from "react";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import { BotData } from "./bot_hashes.js";
import { UsbData } from "./usb_hashes.js";
import { ThreeDBotData } from "./3d_cache.js";
import * as anchor from "@project-serum/anchor";
import jQuery from 'jquery';
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletDialogButton } from "@solana/wallet-adapter-material-ui";
import { programs } from "@metaplex/js";
import { shortenAddress } from "../mybots/candy-machine";
import { Token } from '@solana/spl-token';
import { Button, ButtonUpgrade } from "../../components/button";
import { BotNftThree } from "../../components/botNft";
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';


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

const BURN_WALLET_ADDRESS = new anchor.web3.PublicKey(
  "Fpn3VBmVrGX9C6NfNCBDATq5tKMZ5vAfkGn1TnuEgW7c"
);

const { metadata: { Metadata } } = programs;

export interface HomeProps {
  connection: anchor.web3.Connection;
}

type BotType = {
  name: string;
  uri: string;
  attributes: string[];
}
type UsbType = {
  name: string;
  uri: string;
}
type BotDropdownType = {
  label: string;
  value: string;
}
type UsbDropdownType = {
  label: string;
  value: string;
}

const UpgradeHome = (props: HomeProps) => {
  const [robotCount, setRobotCount] = useState<number>();
  const [usbCount, setUsbCount] = useState<number>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [pngUriList, setPngUriList] = useState<any[]>();
  const [botMetadataList, setBotMetadataList] = useState<BotType[]>();
  const [botDropdownList, setBotDropdownList] = useState<BotDropdownType[]>();
  const [usbMetadataList, setUsbMetadataList] = useState<UsbType[]>();
  const [usbDropdownList, setUsbDropdownList] = useState<UsbDropdownType[]>();
  const [selectedValue, setSelectedValue] = useState<string>();
  const [selectedLabel, setSelectedLabel] = useState<string>();
  const [selectedLabelNumber, setSelectedLabelNumber] = useState<string>();
  const [usbSelectedValue, setUsbSelectedValue] = useState<string>();

  const wallet = useWallet();
  // const valid2DList = BotData
  // const validUsbList = UsbData
  const valid2DList = [];
  const validUsbList = [];
  const png2DList : string[] = [];
  const botData : BotType[] = [];
  const usbData : UsbType[] = [];
  const dropdownFormat : BotDropdownType[] = [];
  const usbDropdownFormat : UsbDropdownType[] = [];
  


  async function transferNft(connection, connectedWallet, to, botName, token, usbToken){
    console.log("entering transferNft")
    console.log({connection, connectedWallet, to, token})
    console.log("Bot Name: ")
    console.log(botName)
    const mintPublicKey = new anchor.web3.PublicKey(token);
    const usbPublicKey = new anchor.web3.PublicKey(usbToken);

      const mint = new Token(
          connection,
          mintPublicKey,
          TOKEN_PROGRAM_ID,
          connectedWallet.payer
      );

      const fromTokenAccount = await mint.getOrCreateAssociatedAccountInfo(connectedWallet.publicKey);

      const destPublicKey = new anchor.web3.PublicKey(to)

      // Get the derived address of the destination wallet which will hold the custom token
      const associatedDestinationTokenAddr = await Token.getAssociatedTokenAddress(
        mint.associatedProgramId,
        mint.programId,
        mintPublicKey,
        destPublicKey
      );

      const receiverAccount = await connection.getAccountInfo(associatedDestinationTokenAddr);
      const instructions: anchor.web3.TransactionInstruction[] = [];

      if (receiverAccount === null) {
        instructions.push(
          Token.createAssociatedTokenAccountInstruction(
            mint.associatedProgramId,
            mint.programId,
            mintPublicKey,
            associatedDestinationTokenAddr,
            destPublicKey,
            connectedWallet.publicKey
          )
        )
      }

      instructions.push(
        Token.createTransferInstruction(
          TOKEN_PROGRAM_ID,
          fromTokenAccount.address,
          associatedDestinationTokenAddr,
          connectedWallet.publicKey,
          [],
          1
        )
      );

      const transaction = new anchor.web3.Transaction().add(...instructions);
      transaction.feePayer = connectedWallet.publicKey;
      transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;

      console.log("about to send Transaction")
      const res = await connectedWallet.sendTransaction(
          transaction,
          connection,
      );

      console.log("RESULT", res)
      const confirmation = await connection.confirmTransaction(res);
      console.log("Confirmation", confirmation)

      const response = await fetch(
        // "http://localhost:5001/asrc-83e3c/us-central1/metadataUpdate",
        "https://us-central1-asrc-83e3c.cloudfunctions.net/metadataUpdate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "Accept": "application/json",
            // "Access-Control-Allow-Origin": "https://us-central1-asrc-83e3c.cloudfunctions.net/metadataUpdate",
          },
          body: JSON.stringify({
            transactionId: res,
            mintHash: usbPublicKey.toBase58(),
            botHash: mintPublicKey.toBase58(),
            botName: botName.toString(),
          }),
        }
      ).then((e) => e.json());

      console.log(response)
  }

  useEffect(() => {
  (async () => {
    if (wallet?.publicKey) {
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

       const valid2DList = await fetch(
        // "http://localhost:5001/asrc-83e3c/us-central1/readBotHashes",
        "https://us-central1-asrc-83e3c.cloudfunctions.net/readBotHashes",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "Accept": "application/json",
            // "Access-Control-Allow-Origin": "https://us-central1-asrc-83e3c.cloudfunctions.net/metadataUpdate",
          },
        }
      ).then((e) => e.json());

      const validUsbList = await fetch(
        // "http://localhost:5001/asrc-83e3c/us-central1/readUsbHashes",
        "https://us-central1-asrc-83e3c.cloudfunctions.net/readUsbHashes",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // "Accept": "application/json",
            // "Access-Control-Allow-Origin": "https://us-central1-asrc-83e3c.cloudfunctions.net/metadataUpdate",
          },
        }
      ).then((e) => e.json());

      const botAddresses = tokenAddresses
        .filter((address) => {
          return valid2DList.indexOf(address) > -1;
        })

      const usbAddresses = tokenAddresses
        .filter((address) => {
          return validUsbList.indexOf(address) > -1;
        })

      var numRobos = 0

      // if (botTokens) {
      for (const id of botAddresses) {
        setIsLoaded(false);

        const MINT_KEY = new anchor.web3.PublicKey(id);
        const pdaAccount = await anchor.web3.PublicKey.findProgramAddress([Buffer.from('metadata'), METADATA_PROGRAM_ID.toBuffer(),MINT_KEY.toBuffer()],METADATA_PROGRAM_ID)
        const metadata = await Metadata.load(props.connection, pdaAccount[0].toString());
        const arweaveData = await jQuery.getJSON(metadata.data.data.uri.toString())
        const arweaveDataName = arweaveData.name
        const arweaveDataAttributes = arweaveData.attributes

        botData.push(
          {
            name: arweaveDataName,
            uri: arweaveData.image.toString(),
            attributes: arweaveDataAttributes
          }
        )

        dropdownFormat.push(
          {
            label: arweaveDataName,
            value: id
          }
        )

        png2DList.push(arweaveData.image.toString())
        numRobos = numRobos + 1
        setRobotCount(numRobos)
        setBotMetadataList(botData)
        setPngUriList(png2DList)
        setBotDropdownList(dropdownFormat)
    }

    var numUsbs = 0
    for (const usbId of usbAddresses) {
      setIsLoaded(false);

      const USB_MINT_KEY = new anchor.web3.PublicKey(
        usbId
      );
      const usbPdaAccount = await anchor.web3.PublicKey.findProgramAddress([Buffer.from('metadata'), METADATA_PROGRAM_ID.toBuffer(),USB_MINT_KEY.toBuffer()],METADATA_PROGRAM_ID)
      const usbMetadata = await Metadata.load(props.connection, usbPdaAccount[0].toString());
      const usbArweaveData = await jQuery.getJSON(usbMetadata.data.data.uri.toString())
      const usbArweaveDataName = usbArweaveData.name

      usbData.push(
        {
          name: usbArweaveDataName,
          uri: usbArweaveData.image.toString()
        }
      )

      usbDropdownFormat.push(
        {
          label: usbArweaveDataName,
          value: usbId
        }
      )

      numUsbs = numUsbs + 1
      setUsbCount(numUsbs)
      setUsbMetadataList(usbData)
      setUsbDropdownList(usbDropdownFormat)
  }

    setIsLoaded(true);
    console.log("Complete 2D arweave png list")
    console.log(pngUriList)
    console.log("Bot -> Mint hash mapping")
    console.log(botDropdownList)

    }
  })();
  }, [wallet, props.connection]);


  // handle onChange event of the dropdown
  const handleChange = e => {
    setSelectedValue(e.value);
    setSelectedLabel(e.label);
    setSelectedLabelNumber(e.number);
  }

  // handle onChange event of the dropdown
  const handleUsbChange = e => {
    setUsbSelectedValue(e.value);
  }


  return (
    <main>
      <Heading>
        <Title> 3D Upgrade </Title>

        {!wallet?.publicKey ? (
          <ConnectButton>Connect Wallet</ConnectButton>
        ) : (
          <BotContainer>

            <DataRow>
              {wallet && (
                <DataContainer>Wallet: {shortenAddress(wallet.publicKey.toBase58() || "")}</DataContainer>
              )}
              {wallet && <DataContainer>2D Robots: {(robotCount || 0).toLocaleString()}</DataContainer>}
              {wallet && <DataContainer>Total USBs: {(usbCount || 0).toLocaleString()}</DataContainer>}
            </DataRow>

            {wallet && !isLoaded && <CircularProgress />}

            {wallet && isLoaded && botMetadataList && botDropdownList && usbDropdownList &&
              <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <Select
                    value={botDropdownList.find(obj => obj.value === selectedValue && obj.label === selectedLabel)} // set selected value
                    options={ botDropdownList }
                    onChange={handleChange} // assign onChange function
                  />
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                  <Select
                    value={usbDropdownList.find(obj => obj.value === usbSelectedValue)} // set selected value
                    options={ usbDropdownList }
                    onChange={handleUsbChange} // assign onChange function
                  />
                </div>
              </div>
              </div>
            }

            {selectedValue && selectedLabel && usbSelectedValue &&
            <BotNftThree imgUrl={ThreeDBotData[0][selectedLabel.match(/(\d+)/)[0].valueOf()]['imageLink']} />
            }

            {wallet && isLoaded && botMetadataList && usbMetadataList && selectedValue && selectedLabel && usbSelectedValue &&
              <ButtonUpgrade onClick={() => transferNft(props.connection, wallet, BURN_WALLET_ADDRESS, selectedLabel.toString(), new anchor.web3.PublicKey(selectedValue.toString()), new anchor.web3.PublicKey(usbSelectedValue.toString()))}>Upgrade</ButtonUpgrade>
            }

          </BotContainer>
        )}
      </Heading>
    </main>
  );
};

export default UpgradeHome;
