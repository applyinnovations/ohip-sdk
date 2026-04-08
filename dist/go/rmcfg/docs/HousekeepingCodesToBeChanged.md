# HousekeepingCodesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Codes** | Pointer to [**[]HousekeepingCodeConfigType**](HousekeepingCodeConfigType.md) | List of the housekeeping codes to be configured or fetched | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingCodesToBeChanged

`func NewHousekeepingCodesToBeChanged() *HousekeepingCodesToBeChanged`

NewHousekeepingCodesToBeChanged instantiates a new HousekeepingCodesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingCodesToBeChangedWithDefaults

`func NewHousekeepingCodesToBeChangedWithDefaults() *HousekeepingCodesToBeChanged`

NewHousekeepingCodesToBeChangedWithDefaults instantiates a new HousekeepingCodesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCodes

`func (o *HousekeepingCodesToBeChanged) GetCodes() []HousekeepingCodeConfigType`

GetCodes returns the Codes field if non-nil, zero value otherwise.

### GetCodesOk

`func (o *HousekeepingCodesToBeChanged) GetCodesOk() (*[]HousekeepingCodeConfigType, bool)`

GetCodesOk returns a tuple with the Codes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodes

`func (o *HousekeepingCodesToBeChanged) SetCodes(v []HousekeepingCodeConfigType)`

SetCodes sets Codes field to given value.

### HasCodes

`func (o *HousekeepingCodesToBeChanged) HasCodes() bool`

HasCodes returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingCodesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingCodesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingCodesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingCodesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingCodesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingCodesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingCodesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingCodesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


