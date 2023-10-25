# PostTemplateCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateCodes** | Pointer to [**[]TemplateCodeType**](TemplateCodeType.md) | List of Template Codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostTemplateCodesRequest

`func NewPostTemplateCodesRequest() *PostTemplateCodesRequest`

NewPostTemplateCodesRequest instantiates a new PostTemplateCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostTemplateCodesRequestWithDefaults

`func NewPostTemplateCodesRequestWithDefaults() *PostTemplateCodesRequest`

NewPostTemplateCodesRequestWithDefaults instantiates a new PostTemplateCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostTemplateCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostTemplateCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostTemplateCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostTemplateCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateCodes

`func (o *PostTemplateCodesRequest) GetTemplateCodes() []TemplateCodeType`

GetTemplateCodes returns the TemplateCodes field if non-nil, zero value otherwise.

### GetTemplateCodesOk

`func (o *PostTemplateCodesRequest) GetTemplateCodesOk() (*[]TemplateCodeType, bool)`

GetTemplateCodesOk returns a tuple with the TemplateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateCodes

`func (o *PostTemplateCodesRequest) SetTemplateCodes(v []TemplateCodeType)`

SetTemplateCodes sets TemplateCodes field to given value.

### HasTemplateCodes

`func (o *PostTemplateCodesRequest) HasTemplateCodes() bool`

HasTemplateCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *PostTemplateCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostTemplateCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostTemplateCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostTemplateCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


