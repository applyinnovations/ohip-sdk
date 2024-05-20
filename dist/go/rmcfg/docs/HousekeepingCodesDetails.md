# HousekeepingCodesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Codes** | Pointer to [**[]HousekeepingCodeConfigType**](HousekeepingCodeConfigType.md) | List of the housekeeping codes to be configured or fetched | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingCodesDetails

`func NewHousekeepingCodesDetails() *HousekeepingCodesDetails`

NewHousekeepingCodesDetails instantiates a new HousekeepingCodesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingCodesDetailsWithDefaults

`func NewHousekeepingCodesDetailsWithDefaults() *HousekeepingCodesDetails`

NewHousekeepingCodesDetailsWithDefaults instantiates a new HousekeepingCodesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCodes

`func (o *HousekeepingCodesDetails) GetCodes() []HousekeepingCodeConfigType`

GetCodes returns the Codes field if non-nil, zero value otherwise.

### GetCodesOk

`func (o *HousekeepingCodesDetails) GetCodesOk() (*[]HousekeepingCodeConfigType, bool)`

GetCodesOk returns a tuple with the Codes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodes

`func (o *HousekeepingCodesDetails) SetCodes(v []HousekeepingCodeConfigType)`

SetCodes sets Codes field to given value.

### HasCodes

`func (o *HousekeepingCodesDetails) HasCodes() bool`

HasCodes returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingCodesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingCodesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingCodesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingCodesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingCodesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingCodesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingCodesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingCodesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


