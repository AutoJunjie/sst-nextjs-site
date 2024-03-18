import { 
  StackContext,
  NextjsSite } from "sst/constructs";

export function ExampleStack({stack}: StackContext) {
  
  const site = new NextjsSite(stack, "ReactSite", {
    path: "packages/frontend/BRClient",
    regional:{
      enableServerUrlIamAuth: true
    }
  });

  // Show the URLs in the output
  stack.addOutputs({
    SiteUrl: site.url,
  });
}
