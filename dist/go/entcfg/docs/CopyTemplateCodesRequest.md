# CopyTemplateCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Codes** | Pointer to **[]string** |  | [optional] 
**HotelCodes** | Pointer to **[]string** | Hotel code. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateName** | Pointer to [**CopyTemplateType**](CopyTemplateType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCopyTemplateCodesRequest

`func NewCopyTemplateCodesRequest() *CopyTemplateCodesRequest`

NewCopyTemplateCodesRequest instantiates a new CopyTemplateCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyTemplateCodesRequestWithDefaults

`func NewCopyTemplateCodesRequestWithDefaults() *CopyTemplateCodesRequest`

NewCopyTemplateCodesRequestWithDefaults instantiates a new CopyTemplateCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCodes

`func (o *CopyTemplateCodesRequest) GetCodes() []string`

GetCodes returns the Codes field if non-nil, zero value otherwise.

### GetCodesOk

`func (o *CopyTemplateCodesRequest) GetCodesOk() (*[]string, bool)`

GetCodesOk returns a tuple with the Codes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodes

`func (o *CopyTemplateCodesRequest) SetCodes(v []string)`

SetCodes sets Codes field to given value.

### HasCodes

`func (o *CopyTemplateCodesRequest) HasCodes() bool`

HasCodes returns a boolean if a field has been set.

### GetHotelCodes

`func (o *CopyTemplateCodesRequest) GetHotelCodes() []string`

GetHotelCodes returns the HotelCodes field if non-nil, zero value otherwise.

### GetHotelCodesOk

`func (o *CopyTemplateCodesRequest) GetHotelCodesOk() (*[]string, bool)`

GetHotelCodesOk returns a tuple with the HotelCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodes

`func (o *CopyTemplateCodesRequest) SetHotelCodes(v []string)`

SetHotelCodes sets HotelCodes field to given value.

### HasHotelCodes

`func (o *CopyTemplateCodesRequest) HasHotelCodes() bool`

HasHotelCodes returns a boolean if a field has been set.

### GetLinks

`func (o *CopyTemplateCodesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyTemplateCodesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyTemplateCodesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyTemplateCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateName

`func (o *CopyTemplateCodesRequest) GetTemplateName() CopyTemplateType`

GetTemplateName returns the TemplateName field if non-nil, zero value otherwise.

### GetTemplateNameOk

`func (o *CopyTemplateCodesRequest) GetTemplateNameOk() (*CopyTemplateType, bool)`

GetTemplateNameOk returns a tuple with the TemplateName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateName

`func (o *CopyTemplateCodesRequest) SetTemplateName(v CopyTemplateType)`

SetTemplateName sets TemplateName field to given value.

### HasTemplateName

`func (o *CopyTemplateCodesRequest) HasTemplateName() bool`

HasTemplateName returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyTemplateCodesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyTemplateCodesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyTemplateCodesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyTemplateCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


