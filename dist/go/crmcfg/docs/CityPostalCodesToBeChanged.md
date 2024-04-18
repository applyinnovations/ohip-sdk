# CityPostalCodesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CityPostalCodes** | Pointer to [**[]CityPostalCodeType**](CityPostalCodeType.md) | Lists of City and Postal Codes. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCityPostalCodesToBeChanged

`func NewCityPostalCodesToBeChanged() *CityPostalCodesToBeChanged`

NewCityPostalCodesToBeChanged instantiates a new CityPostalCodesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCityPostalCodesToBeChangedWithDefaults

`func NewCityPostalCodesToBeChangedWithDefaults() *CityPostalCodesToBeChanged`

NewCityPostalCodesToBeChangedWithDefaults instantiates a new CityPostalCodesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCityPostalCodes

`func (o *CityPostalCodesToBeChanged) GetCityPostalCodes() []CityPostalCodeType`

GetCityPostalCodes returns the CityPostalCodes field if non-nil, zero value otherwise.

### GetCityPostalCodesOk

`func (o *CityPostalCodesToBeChanged) GetCityPostalCodesOk() (*[]CityPostalCodeType, bool)`

GetCityPostalCodesOk returns a tuple with the CityPostalCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCityPostalCodes

`func (o *CityPostalCodesToBeChanged) SetCityPostalCodes(v []CityPostalCodeType)`

SetCityPostalCodes sets CityPostalCodes field to given value.

### HasCityPostalCodes

`func (o *CityPostalCodesToBeChanged) HasCityPostalCodes() bool`

HasCityPostalCodes returns a boolean if a field has been set.

### GetLinks

`func (o *CityPostalCodesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CityPostalCodesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CityPostalCodesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CityPostalCodesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CityPostalCodesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CityPostalCodesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CityPostalCodesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CityPostalCodesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

