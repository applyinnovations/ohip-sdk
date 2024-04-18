# TemplateCodesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateCodes** | Pointer to [**[]TemplateCodeType**](TemplateCodeType.md) | List of Template Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateCodesDetails

`func NewTemplateCodesDetails() *TemplateCodesDetails`

NewTemplateCodesDetails instantiates a new TemplateCodesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateCodesDetailsWithDefaults

`func NewTemplateCodesDetailsWithDefaults() *TemplateCodesDetails`

NewTemplateCodesDetailsWithDefaults instantiates a new TemplateCodesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateCodes

`func (o *TemplateCodesDetails) GetTemplateCodes() []TemplateCodeType`

GetTemplateCodes returns the TemplateCodes field if non-nil, zero value otherwise.

### GetTemplateCodesOk

`func (o *TemplateCodesDetails) GetTemplateCodesOk() (*[]TemplateCodeType, bool)`

GetTemplateCodesOk returns a tuple with the TemplateCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateCodes

`func (o *TemplateCodesDetails) SetTemplateCodes(v []TemplateCodeType)`

SetTemplateCodes sets TemplateCodes field to given value.

### HasTemplateCodes

`func (o *TemplateCodesDetails) HasTemplateCodes() bool`

HasTemplateCodes returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateCodesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateCodesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateCodesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateCodesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateCodesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateCodesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateCodesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateCodesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

