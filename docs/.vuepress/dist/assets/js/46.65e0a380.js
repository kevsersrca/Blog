(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{273:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#how-to-create-lambda-with-golang-on-aws"}},[a._v("How to create lambda with golang on AWS")]),s("ul",[s("li",[s("a",{attrs:{href:"#to-install-the-aws-cli-with-pip3"}},[a._v("To install the AWS CLI with pip3")])]),s("li",[s("a",{attrs:{href:"#lets-write-a-code"}},[a._v("Lets write a code")])]),s("li",[s("a",{attrs:{href:"#finally-deploy-lambda"}},[a._v("Finally, deploy lambda")])])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"how-to-create-lambda-with-golang-on-aws"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-lambda-with-golang-on-aws"}},[a._v("#")]),a._v(" How to create lambda with golang on AWS")]),a._v(" "),s("p",[a._v("As for me, aws lambda most usefull server. Fast and cheap. You can see if you want to see how cheap it is. "),s("a",{attrs:{href:"https://dashbird.io/lambda-cost-calculator/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Lambda Cost Calculator"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"to-install-the-aws-cli-with-pip3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to-install-the-aws-cli-with-pip3"}},[a._v("#")]),a._v(" To install the AWS CLI with pip3")]),a._v(" "),s("p",[a._v("1- Download and install the latest version of Python from the "),s("a",{attrs:{href:"https://www.python.org/downloads/",target:"_blank",rel:"noopener noreferrer"}},[a._v("downloads page"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("2- Download and run the pip3 installation script provided by the Python Packaging Authority")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("λ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -O https://bootstrap.pypa.io/get-pip.py\nλ python3 get-pip.py --user\n")])])]),s("p",[a._v("3- Use your newly installed pip3 to install the AWS CLI. We recommend that if you use Python version 3+, that you use the pip3 command.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("λ pip3 "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" awscli --upgrade --user\n")])])]),s("p",[a._v("4- Verify that the AWS CLI is installed correctly.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("λ aws --version\nAWS CLI "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.16")]),a._v(".273 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("Python "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.7")]),a._v(".3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("h3",{attrs:{id:"lets-write-a-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lets-write-a-code"}},[a._v("#")]),a._v(" Lets write a code")]),a._v(" "),s("p",[a._v("1- Firstly install aws-lambda-go package")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("λ go get github.com/aws/aws-lambda-go/lambda\n")])])]),s("p",[a._v("2- and copy paste.")]),a._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("package")]),a._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"fmt"')]),a._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"github.com/aws/aws-lambda-go/lambda"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("type")]),a._v(" Event "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("struct")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\tUsername "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("string")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("e Event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[a._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" fmt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Sprintf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"<h1>Hello %s from Lambda Go</h1>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("nil")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("func")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\tlambda"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("Start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),s("p",[a._v("3- build binary and zip to code for lambda deployment")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" λ "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOOS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("linux "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("GOARCH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64 go build main.go\n λ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("zip")]),a._v(" main.zip main\n")])])]),s("h3",{attrs:{id:"finally-deploy-lambda"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finally-deploy-lambda"}},[a._v("#")]),a._v(" Finally, deploy lambda")]),a._v(" "),s("p",[a._v("Before deploy, select the iam role. You looking for role list in this command")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("λ aws iam list-roles\n")])])]),s("p",[a._v("Function name is golang-lambda, zip file name is main.zip and enter.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" aws lambda create-function --function-name golang-lambda --runtime go1.x --zip-file fileb://main.zip --handler main --role arn:aws:iam::123456789012:user/kev\n")])])]),s("p",[a._v("Source code available on "),s("a",{attrs:{href:"https://github.com/kevsersrca/golang-lambda",target:"_blank",rel:"noopener noreferrer"}},[a._v("github"),s("OutboundLink")],1),a._v(" .")]),a._v(" "),s("p",[a._v("Happy Deployment.")])])}),[],!1,null,null,null);t.default=e.exports}}]);