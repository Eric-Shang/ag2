"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[844],{93329:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=s(74848),t=s(28453);const r={sidebar_label:"code_utils",title:"code_utils"},l=void 0,o={id:"reference/code_utils",title:"code_utils",description:"content\\_str",source:"@site/docs/reference/code_utils.md",sourceDirName:"reference",slug:"/reference/code_utils",permalink:"/ag2/docs/reference/code_utils",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/code_utils.md",tags:[],version:"current",frontMatter:{sidebar_label:"code_utils",title:"code_utils"},sidebar:"referenceSideBar",previous:{title:"browser_utils",permalink:"/ag2/docs/reference/browser_utils"},next:{title:"exception_utils",permalink:"/ag2/docs/reference/exception_utils"}},c={},d=[{value:"content_str",id:"content_str",level:3},{value:"infer_lang",id:"infer_lang",level:3},{value:"extract_code",id:"extract_code",level:3},{value:"generate_code",id:"generate_code",level:3},{value:"improve_function",id:"improve_function",level:3},{value:"improve_code",id:"improve_code",level:3},{value:"is_docker_running",id:"is_docker_running",level:3},{value:"in_docker_container",id:"in_docker_container",level:3},{value:"execute_code",id:"execute_code",level:3},{value:"generate_assertions",id:"generate_assertions",level:3},{value:"eval_function_completions",id:"eval_function_completions",level:3},{value:"PassAssertionFilter",id:"passassertionfilter",level:2},{value:"pass_assertions",id:"pass_assertions",level:3},{value:"implement",id:"implement",level:3},{value:"create_virtual_env",id:"create_virtual_env",level:3}];function a(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"content_str",children:"content_str"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def content_str(\n    content: Union[str, List[Union[UserMessageTextContentPart,\n                                   UserMessageImageContentPart]], None]\n) -> str\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Converts the ",(0,i.jsx)(n.code,{children:"content"})," field of an OpenAI message into a string format."]}),"\n",(0,i.jsx)(n.p,{children:"This function processes content that may be a string, a list of mixed text and image URLs, or None,\nand converts it into a string. Text is directly appended to the result string, while image URLs are\nrepresented by a placeholder image token. If the content is None, an empty string is returned."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"content (Union[str, List, None]): The content to be processed. Can be a string, a list of dictionaries\nrepresenting text and image URLs, or None."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"})," - A string representation of the input content. Image URLs are replaced with an image token."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Notes"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'The function expects each dictionary in the list to have a "type" key that is either "text" or "image_url".\nFor "text" type, the "text" key\'s value is appended to the result. For "image_url", an image token is appended.'}),"\n",(0,i.jsx)(n.li,{children:"This function is useful for handling content that may include both text and image references, especially\nin contexts where images need to be represented as placeholders."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"infer_lang",children:"infer_lang"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def infer_lang(code: str) -> str\n"})}),"\n",(0,i.jsx)(n.p,{children:"infer the language for the code.\nTODO: make it robust."}),"\n",(0,i.jsx)(n.h3,{id:"extract_code",children:"extract_code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def extract_code(\n        text: Union[str, List],\n        pattern: str = CODE_BLOCK_PATTERN,\n        detect_single_line_code: bool = False) -> List[Tuple[str, str]]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Extract code from a text."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"text"})," ",(0,i.jsx)(n.em,{children:"str or List"})," - The content to extract code from. The content can be\na string or a list, as returned by standard GPT or multimodal GPT."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pattern"})," ",(0,i.jsx)(n.em,{children:"str, optional"})," - The regular expression pattern for finding the\ncode block. Defaults to CODE_BLOCK_PATTERN."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"detect_single_line_code"})," ",(0,i.jsx)(n.em,{children:"bool, optional"})," - Enable the new feature for\nextracting single line code. Defaults to False."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"list"}),' - A list of tuples, each containing the language and the code.\nIf there is no code block in the input text, the language would be "unknown".\nIf there is code block but the language is not specified, the language would be "".']}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"generate_code",children:"generate_code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def generate_code(pattern: str = CODE_BLOCK_PATTERN,\n                  **config) -> Tuple[str, float]\n"})}),"\n",(0,i.jsx)(n.p,{children:"(openai<1) Generate code."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pattern"})," ",(0,i.jsx)(n.em,{children:"Optional, str"})," - The regular expression pattern for finding the code block.\nThe default pattern is for finding a code block in a markdown file."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config"})," ",(0,i.jsx)(n.em,{children:"Optional, dict"})," - The configuration for the API call."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"})," - The generated code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"float"})," - The cost of the generation."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"improve_function",children:"improve_function"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def improve_function(file_name, func_name, objective, **config)\n"})}),"\n",(0,i.jsx)(n.p,{children:"(openai<1) Improve the function to achieve the objective."}),"\n",(0,i.jsx)(n.h3,{id:"improve_code",children:"improve_code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def improve_code(files, objective, suggest_only=True, **config)\n"})}),"\n",(0,i.jsx)(n.p,{children:"(openai<1) Improve the code to achieve a given objective."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"files"})," ",(0,i.jsx)(n.em,{children:"list"})," - A list of file names containing the source code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"objective"})," ",(0,i.jsx)(n.em,{children:"str"})," - The objective to achieve."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"suggest_only"})," ",(0,i.jsx)(n.em,{children:"bool"})," - Whether to return only the suggestions or the improved code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config"})," ",(0,i.jsx)(n.em,{children:"Optional, dict"})," - The configuration for the API call."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"})," - The improved code if suggest_only=False; a list of suggestions if suggest_only=True (default)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"float"})," - The cost of the generation."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"is_docker_running",children:"is_docker_running"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def is_docker_running() -> bool\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check if docker is running."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bool"})," - True if docker is running; False otherwise."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"in_docker_container",children:"in_docker_container"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def in_docker_container() -> bool\n"})}),"\n",(0,i.jsx)(n.p,{children:"Check if the code is running in a docker container."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bool"})," - True if the code is running in a docker container; False otherwise."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"execute_code",children:"execute_code"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def execute_code(\n        code: Optional[str] = None,\n        timeout: Optional[int] = None,\n        filename: Optional[str] = None,\n        work_dir: Optional[str] = None,\n        use_docker: Union[List[str], str, bool] = SENTINEL,\n        lang: Optional[str] = "python") -> Tuple[int, str, Optional[str]]\n'})}),"\n",(0,i.jsx)(n.p,{children:"Execute code in a docker container.\nThis function is not tested on MacOS."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"code"})," ",(0,i.jsx)(n.em,{children:"Optional, str"})," - The code to execute.\nIf None, the code from the file specified by filename will be executed.\nEither code or filename must be provided."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"timeout"})," ",(0,i.jsx)(n.em,{children:"Optional, int"})," - The maximum execution time in seconds.\nIf None, a default timeout will be used. The default timeout is 600 seconds. On Windows, the timeout is not enforced when use_docker=False."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"filename"})," ",(0,i.jsx)(n.em,{children:"Optional, str"})," - The file name to save the code or where the code is stored when ",(0,i.jsx)(n.code,{children:"code"})," is None.\nIf None, a file with a randomly generated name will be created.\nThe randomly generated file will be deleted after execution.\nThe file name must be a relative path. Relative paths are relative to the working directory."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"work_dir"})," ",(0,i.jsx)(n.em,{children:"Optional, str"}),' - The working directory for the code execution.\nIf None, a default working directory will be used.\nThe default working directory is the "extensions" directory under\n"path_to_autogen".']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"use_docker"})," ",(0,i.jsx)(n.em,{children:"list, str or bool"})," - The docker image to use for code execution.\nDefault is True, which means the code will be executed in a docker container. A default list of images will be used.\nIf a list or a str of image name(s) is provided, the code will be executed in a docker container\nwith the first image successfully pulled.\nIf False, the code will be executed in the current environment.\nExpected behaviour:\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"use_docker"})," is not set (i.e. left default to True) or is explicitly set to True and the docker package is available, the code will run in a Docker container."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"use_docker"})," is not set (i.e. left default to True) or is explicitly set to True but the Docker package is missing or docker isn't running, an error will be raised."]}),"\n",(0,i.jsxs)(n.li,{children:["If ",(0,i.jsx)(n.code,{children:"use_docker"})," is explicitly set to False, the code will run natively.\nIf the code is executed in the current environment,\nthe code must be trusted."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lang"})," ",(0,i.jsx)(n.em,{children:"Optional, str"}),' - The language of the code. Default is "python".']}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"int"})," - 0 if the code executes successfully."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"})," - The error message if the code fails to execute; the stdout otherwise."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"image"})," - The docker image name after container run when docker is used."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"generate_assertions",children:"generate_assertions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def generate_assertions(definition: str, **config) -> Tuple[str, float]\n"})}),"\n",(0,i.jsx)(n.p,{children:"(openai<1) Generate assertions for a function."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"definition"})," ",(0,i.jsx)(n.em,{children:"str"})," - The function definition, including the signature and docstr."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"config"})," ",(0,i.jsx)(n.em,{children:"Optional, dict"})," - The configuration for the API call."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"})," - The generated assertions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"float"})," - The cost of the generation."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"eval_function_completions",children:"eval_function_completions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def eval_function_completions(responses: List[str],\n                              definition: str,\n                              test: Optional[str] = None,\n                              entry_point: Optional[str] = None,\n                              assertions: Optional[Union[str, Callable[\n                                  [str], Tuple[str, float]]]] = None,\n                              timeout: Optional[float] = 3,\n                              use_docker: Optional[bool] = True) -> Dict\n"})}),"\n",(0,i.jsx)(n.p,{children:"(openai<1) Select a response from a list of responses for the function completion task (using generated assertions), and/or evaluate if the task is successful using a gold test."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"responses"})," ",(0,i.jsx)(n.em,{children:"list"})," - The list of responses."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"definition"})," ",(0,i.jsx)(n.em,{children:"str"})," - The input definition."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"test"})," ",(0,i.jsx)(n.em,{children:"Optional, str"})," - The test code."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"entry_point"})," ",(0,i.jsx)(n.em,{children:"Optional, str"})," - The name of the function."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"assertions"})," ",(0,i.jsx)(n.em,{children:"Optional, str or Callable"})," - The assertion code which serves as a filter of the responses, or an assertion generator.\nWhen provided, only the responses that pass the assertions will be considered for the actual test (if provided)."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"timeout"})," ",(0,i.jsx)(n.em,{children:"Optional, float"})," - The timeout for executing the code."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dict"})," - The success metrics."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"passassertionfilter",children:"PassAssertionFilter"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"class PassAssertionFilter()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"pass_assertions",children:"pass_assertions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def pass_assertions(context, response, **_)\n"})}),"\n",(0,i.jsx)(n.p,{children:"(openai<1) Check if the response passes the assertions."}),"\n",(0,i.jsx)(n.h3,{id:"implement",children:"implement"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def implement(\n    definition: str,\n    configs: Optional[List[Dict]] = None,\n    assertions: Optional[Union[str,\n                               Callable[[str],\n                                        Tuple[str,\n                                              float]]]] = generate_assertions\n) -> Tuple[str, float]\n"})}),"\n",(0,i.jsx)(n.p,{children:"(openai<1) Implement a function from a definition."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"definition"})," ",(0,i.jsx)(n.em,{children:"str"})," - The function definition, including the signature and docstr."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"configs"})," ",(0,i.jsx)(n.em,{children:"list"})," - The list of configurations for completion."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"assertions"})," ",(0,i.jsx)(n.em,{children:"Optional, str or Callable"})," - The assertion code which serves as a filter of the responses, or an assertion generator."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"str"})," - The implementation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"float"})," - The cost of the implementation."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"int"})," - The index of the configuration which generates the implementation."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"create_virtual_env",children:"create_virtual_env"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"def create_virtual_env(dir_path: str, **env_args) -> SimpleNamespace\n"})}),"\n",(0,i.jsx)(n.p,{children:"Creates a python virtual environment and returns the context."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"dir_path"})," ",(0,i.jsx)(n.em,{children:"str"})," - Directory path where the env will be created."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"**env_args"})," - Any extra args to pass to the ",(0,i.jsx)(n.code,{children:"EnvBuilder"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"SimpleNamespace"})," - the virtual env context object."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>o});var i=s(96540);const t={},r=i.createContext(t);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);