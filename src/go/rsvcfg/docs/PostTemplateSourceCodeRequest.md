# PostTemplateSourceCodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**TemplateSourceCode** | Pointer to [**TemplateSourceCodeType**](TemplateSourceCodeType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostTemplateSourceCodeRequest

`func NewPostTemplateSourceCodeRequest() *PostTemplateSourceCodeRequest`

NewPostTemplateSourceCodeRequest instantiates a new PostTemplateSourceCodeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTemplateSourceCodeRequestWithDefaults

`func NewPostTemplateSourceCodeRequestWithDefaults() *PostTemplateSourceCodeRequest`

NewPostTemplateSourceCodeRequestWithDefaults instantiates a new PostTemplateSourceCodeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostTemplateSourceCodeRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTemplateSourceCodeRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTemplateSourceCodeRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTemplateSourceCodeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateSourceCode

`func (o *PostTemplateSourceCodeRequest) GetTemplateSourceCode() TemplateSourceCodeType`

GetTemplateSourceCode returns the TemplateSourceCode field if non-nil, zero value otherwise.

### GetTemplateSourceCodeOk

`func (o *PostTemplateSourceCodeRequest) GetTemplateSourceCodeOk() (*TemplateSourceCodeType, bool)`

GetTemplateSourceCodeOk returns a tuple with the TemplateSourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateSourceCode

`func (o *PostTemplateSourceCodeRequest) SetTemplateSourceCode(v TemplateSourceCodeType)`

SetTemplateSourceCode sets TemplateSourceCode field to given value.

### HasTemplateSourceCode

`func (o *PostTemplateSourceCodeRequest) HasTemplateSourceCode() bool`

HasTemplateSourceCode returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTemplateSourceCodeRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTemplateSourceCodeRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTemplateSourceCodeRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTemplateSourceCodeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


