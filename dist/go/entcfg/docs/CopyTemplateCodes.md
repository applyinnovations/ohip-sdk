# CopyTemplateCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TemplateName** | Pointer to [**CopyTemplateType**](CopyTemplateType.md) |  | [optional] 
**Codes** | Pointer to **[]string** |  | [optional] 
**HotelCodes** | Pointer to **[]string** | Hotel code. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyTemplateCodes

`func NewCopyTemplateCodes() *CopyTemplateCodes`

NewCopyTemplateCodes instantiates a new CopyTemplateCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyTemplateCodesWithDefaults

`func NewCopyTemplateCodesWithDefaults() *CopyTemplateCodes`

NewCopyTemplateCodesWithDefaults instantiates a new CopyTemplateCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTemplateName

`func (o *CopyTemplateCodes) GetTemplateName() CopyTemplateType`

GetTemplateName returns the TemplateName field if non-nil, zero value otherwise.

### GetTemplateNameOk

`func (o *CopyTemplateCodes) GetTemplateNameOk() (*CopyTemplateType, bool)`

GetTemplateNameOk returns a tuple with the TemplateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateName

`func (o *CopyTemplateCodes) SetTemplateName(v CopyTemplateType)`

SetTemplateName sets TemplateName field to given value.

### HasTemplateName

`func (o *CopyTemplateCodes) HasTemplateName() bool`

HasTemplateName returns a boolean if a field has been set.

### GetCodes

`func (o *CopyTemplateCodes) GetCodes() []string`

GetCodes returns the Codes field if non-nil, zero value otherwise.

### GetCodesOk

`func (o *CopyTemplateCodes) GetCodesOk() (*[]string, bool)`

GetCodesOk returns a tuple with the Codes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodes

`func (o *CopyTemplateCodes) SetCodes(v []string)`

SetCodes sets Codes field to given value.

### HasCodes

`func (o *CopyTemplateCodes) HasCodes() bool`

HasCodes returns a boolean if a field has been set.

### GetHotelCodes

`func (o *CopyTemplateCodes) GetHotelCodes() []string`

GetHotelCodes returns the HotelCodes field if non-nil, zero value otherwise.

### GetHotelCodesOk

`func (o *CopyTemplateCodes) GetHotelCodesOk() (*[]string, bool)`

GetHotelCodesOk returns a tuple with the HotelCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodes

`func (o *CopyTemplateCodes) SetHotelCodes(v []string)`

SetHotelCodes sets HotelCodes field to given value.

### HasHotelCodes

`func (o *CopyTemplateCodes) HasHotelCodes() bool`

HasHotelCodes returns a boolean if a field has been set.

### GetLinks

`func (o *CopyTemplateCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyTemplateCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyTemplateCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyTemplateCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyTemplateCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyTemplateCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyTemplateCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyTemplateCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


