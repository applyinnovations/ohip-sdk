# FetchConversionCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConversionCodes** | Pointer to [**[]ConversionCodeType**](ConversionCodeType.md) | List of Conversion Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchConversionCodes

`func NewFetchConversionCodes() *FetchConversionCodes`

NewFetchConversionCodes instantiates a new FetchConversionCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchConversionCodesWithDefaults

`func NewFetchConversionCodesWithDefaults() *FetchConversionCodes`

NewFetchConversionCodesWithDefaults instantiates a new FetchConversionCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConversionCodes

`func (o *FetchConversionCodes) GetConversionCodes() []ConversionCodeType`

GetConversionCodes returns the ConversionCodes field if non-nil, zero value otherwise.

### GetConversionCodesOk

`func (o *FetchConversionCodes) GetConversionCodesOk() (*[]ConversionCodeType, bool)`

GetConversionCodesOk returns a tuple with the ConversionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConversionCodes

`func (o *FetchConversionCodes) SetConversionCodes(v []ConversionCodeType)`

SetConversionCodes sets ConversionCodes field to given value.

### HasConversionCodes

`func (o *FetchConversionCodes) HasConversionCodes() bool`

HasConversionCodes returns a boolean if a field has been set.

### GetLinks

`func (o *FetchConversionCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchConversionCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchConversionCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchConversionCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchConversionCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchConversionCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchConversionCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchConversionCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


