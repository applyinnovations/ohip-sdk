# CopyHousekeepingSupplyCodesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousekeepingCodes** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the housekeeping code(s) to be copied. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCopyHousekeepingSupplyCodesRequest

`func NewCopyHousekeepingSupplyCodesRequest() *CopyHousekeepingSupplyCodesRequest`

NewCopyHousekeepingSupplyCodesRequest instantiates a new CopyHousekeepingSupplyCodesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyHousekeepingSupplyCodesRequestWithDefaults

`func NewCopyHousekeepingSupplyCodesRequestWithDefaults() *CopyHousekeepingSupplyCodesRequest`

NewCopyHousekeepingSupplyCodesRequestWithDefaults instantiates a new CopyHousekeepingSupplyCodesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingCodes

`func (o *CopyHousekeepingSupplyCodesRequest) GetHousekeepingCodes() []CopyConfigurationCodeType`

GetHousekeepingCodes returns the HousekeepingCodes field if non-nil, zero value otherwise.

### GetHousekeepingCodesOk

`func (o *CopyHousekeepingSupplyCodesRequest) GetHousekeepingCodesOk() (*[]CopyConfigurationCodeType, bool)`

GetHousekeepingCodesOk returns a tuple with the HousekeepingCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingCodes

`func (o *CopyHousekeepingSupplyCodesRequest) SetHousekeepingCodes(v []CopyConfigurationCodeType)`

SetHousekeepingCodes sets HousekeepingCodes field to given value.

### HasHousekeepingCodes

`func (o *CopyHousekeepingSupplyCodesRequest) HasHousekeepingCodes() bool`

HasHousekeepingCodes returns a boolean if a field has been set.

### GetLinks

`func (o *CopyHousekeepingSupplyCodesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CopyHousekeepingSupplyCodesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CopyHousekeepingSupplyCodesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CopyHousekeepingSupplyCodesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CopyHousekeepingSupplyCodesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CopyHousekeepingSupplyCodesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CopyHousekeepingSupplyCodesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CopyHousekeepingSupplyCodesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


