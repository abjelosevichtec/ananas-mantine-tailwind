import { Button, Card, Image, SimpleGrid, Stack, Text } from "@mantine/core";
import { hoveredCat } from "./store";
import { useAtomValue } from "jotai";
import ArrowRight from "components/assets/icons/ArrowRight";

function Content() {
  const cat = useAtomValue(hoveredCat);

  if (!cat) {
    return null;
  }

  return (
    <>
      <div>
        <h3 className="mb-6 text-b2">{cat}</h3>
        <SimpleGrid cols={3}>
          <Stack spacing={4}>
            <Button
              className="w-fit p-0 text-b6 text-eerieBlack hover:bg-transparent [&_svg]:fill-current"
              variant="subtle"
              rightIcon={<ArrowRight />}
            >
              Lux modni dodaci
            </Button>
            <Button
              className="p-0 w-fit text-p2 text-eerieBlack hover:bg-transparent"
              variant="subtle"
            >
              Ženski parfemi
            </Button>
            <Button
              className="p-0 w-fit text-p2 text-eerieBlack hover:bg-transparent"
              variant="subtle"
            >
              Ženski stikovi
            </Button>
          </Stack>
          <Stack spacing={4}>
            <Button
              className="w-fit p-0 text-b6 text-eerieBlack hover:bg-transparent [&_svg]:fill-current"
              variant="subtle"
              rightIcon={<ArrowRight />}
            >
              Lux odeća
            </Button>
            <Button
              className="p-0 w-fit text-p2 text-eerieBlack hover:bg-transparent"
              variant="subtle"
            >
              Spavacica
            </Button>
            <Button
              className="p-0 w-fit text-p2 text-eerieBlack hover:bg-transparent"
              variant="subtle"
            >
              Muški parfemi
            </Button>
            <Button
              className="p-0 w-fit text-p2 text-eerieBlack hover:bg-transparent"
              variant="subtle"
            >
              Informatika
            </Button>
            <Button
              className="p-0 w-fit text-p2 text-eerieBlack hover:bg-transparent"
              variant="subtle"
            >
              Ženski parfemi
            </Button>
          </Stack>
          <Stack spacing={4}>
            <Button
              className="w-fit p-0 text-b6 text-eerieBlack hover:bg-transparent [&_svg]:fill-current"
              variant="subtle"
              rightIcon={<ArrowRight />}
            >
              Lux obuća
            </Button>
            <Button
              className="p-0 w-fit text-p2 text-eerieBlack hover:bg-transparent"
              variant="subtle"
            >
              Spavacica
            </Button>
            <Button
              className="p-0 w-fit text-p2 text-eerieBlack hover:bg-transparent"
              variant="subtle"
            >
              Muški parfemi
            </Button>
            <Button
              className="p-0 w-fit text-p2 text-eerieBlack hover:bg-transparent"
              variant="subtle"
            >
              Informatika
            </Button>
            <Button
              className="p-0 w-fit text-p2 text-eerieBlack hover:bg-transparent"
              variant="subtle"
            >
              Ženski parfemi
            </Button>
          </Stack>
        </SimpleGrid>
      </div>
      <div className="flex gap-4">
        <SimpleGrid cols={4} spacing={16}>
          <Card className="p-0">
            <Card.Section className="!m-0 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1665989215795-f67f4723087d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                height={172}
                alt="Norway"
              />
            </Card.Section>

            <Text span className="text-p2">
              PUMA Muške patike za trčanje ST RUNNER V2...
            </Text>
          </Card>
          <Card className="p-0">
            <Card.Section className="!m-0 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1666031116438-732c23be9a42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
                height={172}
                alt="Norway"
              />
            </Card.Section>

            <Text span className="text-p2">
              PUMA Muške patike za trčanje ST RUNNER V2...
            </Text>
          </Card>
          <Card className="p-0">
            <Card.Section className="!m-0 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1666021575644-ce1c9a616a9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                height={172}
                alt="Norway"
              />
            </Card.Section>

            <Text span className="text-p2">
              PUMA Muške patike za trčanje ST RUNNER V2...
            </Text>
          </Card>
          <Card className="p-0">
            <Card.Section className="!m-0 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1666021110874-24e450fa215c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                height={172}
                alt="Norway"
              />
            </Card.Section>

            <Text span className="text-p2">
              PUMA Muške patike za trčanje ST RUNNER V2...
            </Text>
          </Card>
        </SimpleGrid>
        <SimpleGrid
          cols={2}
          spacing={16}
          verticalSpacing={0}
          className="flex-shrink-0"
        >
          <Card className="p-0">
            <Card.Section className="!m-0 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1665956600634-4b47eae4faf2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                width={96}
                height={62}
                alt="Norway"
              />
            </Card.Section>

            <Text span className="text-p1">
              Gaming
            </Text>
          </Card>
          <Card className="p-0">
            <Card.Section className="!m-0 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1665954833093-a5bb7047731e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                width={96}
                height={62}
                alt="Norway"
              />
            </Card.Section>

            <Text span className="text-p1">
              DIY
            </Text>
          </Card>
          <Card className="p-0">
            <Card.Section className="!m-0 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1665724627267-ceb4e03202c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                width={96}
                height={62}
                alt="Norway"
              />
            </Card.Section>

            <Text span className="text-p1">
              Gadgets
            </Text>
          </Card>
          <Card className="p-0">
            <Card.Section className="!m-0 overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1665976002213-3a41f5ab02c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=997&q=80"
                width={96}
                height={62}
                alt="Norway"
              />
            </Card.Section>

            <Text span className="text-p1">
              Food
            </Text>
          </Card>
        </SimpleGrid>
      </div>
    </>
  );
}

export default Content;
