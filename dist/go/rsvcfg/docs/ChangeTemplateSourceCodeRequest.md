# ChangeTemplateSourceCodeRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateSourceCode** | Pointer to [**TemplateSourceCodeType**](TemplateSourceCodeType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTemplateSourceCodeRequest

`func NewChangeTemplateSourceCodeRequest() *ChangeTemplateSourceCodeRequest`

NewChangeTemplateSourceCodeRequest instantiates a new ChangeTemplateSourceCodeRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTemplateSourceCodeRequestWithDefaults

`func NewChangeTemplateSourceCodeRequestWithDefaults() *ChangeTemplateSourceCodeRequest`

NewChangeTemplateSourceCodeRequestWithDefaults instantiates a new ChangeTemplateSourceCodeRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTemplateSourceCodeRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTemplateSourceCodeRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTemplateSourceCodeRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTemplateSourceCodeRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateSourceCode

`func (o *ChangeTemplateSourceCodeRequest) GetTemplateSourceCode() TemplateSourceCodeType`

GetTemplateSourceCode returns the TemplateSourceCode field if non-nil, zero value otherwise.

### GetTemplateSourceCodeOk

`func (o *ChangeTemplateSourceCodeRequest) GetTemplateSourceCodeOk() (*TemplateSourceCodeType, bool)`

GetTemplateSourceCodeOk returns a tuple with the TemplateSourceCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateSourceCode

`func (o *ChangeTemplateSourceCodeRequest) SetTemplateSourceCode(v TemplateSourceCodeType)`

SetTemplateSourceCode sets TemplateSourceCode field to given value.

### HasTemplateSourceCode

`func (o *ChangeTemplateSourceCodeRequest) HasTemplateSourceCode() bool`

HasTemplateSourceCode returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTemplateSourceCodeRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTemplateSourceCodeRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTemplateSourceCodeRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTemplateSourceCodeRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


