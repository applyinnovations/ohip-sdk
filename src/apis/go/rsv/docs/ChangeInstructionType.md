# ChangeInstructionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShareReservations** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**UpdatePackagePrice** | Pointer to **bool** | Indicates whether package prices will be updated with the latest configurations. | [optional] 
**ChangeAllShares** | Pointer to **bool** |  | [optional] 
**OverrideInventory** | Pointer to **bool** |  | [optional] 
**FacilitySchedulerOption** | Pointer to [**FacilitySchedulerOptionType**](FacilitySchedulerOptionType.md) |  | [optional] 

## Methods

### NewChangeInstructionType

`func NewChangeInstructionType() *ChangeInstructionType`

NewChangeInstructionType instantiates a new ChangeInstructionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeInstructionTypeWithDefaults

`func NewChangeInstructionTypeWithDefaults() *ChangeInstructionType`

NewChangeInstructionTypeWithDefaults instantiates a new ChangeInstructionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetShareReservations

`func (o *ChangeInstructionType) GetShareReservations() []UniqueIDType`

GetShareReservations returns the ShareReservations field if non-nil, zero value otherwise.

### GetShareReservationsOk

`func (o *ChangeInstructionType) GetShareReservationsOk() (*[]UniqueIDType, bool)`

GetShareReservationsOk returns a tuple with the ShareReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareReservations

`func (o *ChangeInstructionType) SetShareReservations(v []UniqueIDType)`

SetShareReservations sets ShareReservations field to given value.

### HasShareReservations

`func (o *ChangeInstructionType) HasShareReservations() bool`

HasShareReservations returns a boolean if a field has been set.

### GetUpdatePackagePrice

`func (o *ChangeInstructionType) GetUpdatePackagePrice() bool`

GetUpdatePackagePrice returns the UpdatePackagePrice field if non-nil, zero value otherwise.

### GetUpdatePackagePriceOk

`func (o *ChangeInstructionType) GetUpdatePackagePriceOk() (*bool, bool)`

GetUpdatePackagePriceOk returns a tuple with the UpdatePackagePrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatePackagePrice

`func (o *ChangeInstructionType) SetUpdatePackagePrice(v bool)`

SetUpdatePackagePrice sets UpdatePackagePrice field to given value.

### HasUpdatePackagePrice

`func (o *ChangeInstructionType) HasUpdatePackagePrice() bool`

HasUpdatePackagePrice returns a boolean if a field has been set.

### GetChangeAllShares

`func (o *ChangeInstructionType) GetChangeAllShares() bool`

GetChangeAllShares returns the ChangeAllShares field if non-nil, zero value otherwise.

### GetChangeAllSharesOk

`func (o *ChangeInstructionType) GetChangeAllSharesOk() (*bool, bool)`

GetChangeAllSharesOk returns a tuple with the ChangeAllShares field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangeAllShares

`func (o *ChangeInstructionType) SetChangeAllShares(v bool)`

SetChangeAllShares sets ChangeAllShares field to given value.

### HasChangeAllShares

`func (o *ChangeInstructionType) HasChangeAllShares() bool`

HasChangeAllShares returns a boolean if a field has been set.

### GetOverrideInventory

`func (o *ChangeInstructionType) GetOverrideInventory() bool`

GetOverrideInventory returns the OverrideInventory field if non-nil, zero value otherwise.

### GetOverrideInventoryOk

`func (o *ChangeInstructionType) GetOverrideInventoryOk() (*bool, bool)`

GetOverrideInventoryOk returns a tuple with the OverrideInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInventory

`func (o *ChangeInstructionType) SetOverrideInventory(v bool)`

SetOverrideInventory sets OverrideInventory field to given value.

### HasOverrideInventory

`func (o *ChangeInstructionType) HasOverrideInventory() bool`

HasOverrideInventory returns a boolean if a field has been set.

### GetFacilitySchedulerOption

`func (o *ChangeInstructionType) GetFacilitySchedulerOption() FacilitySchedulerOptionType`

GetFacilitySchedulerOption returns the FacilitySchedulerOption field if non-nil, zero value otherwise.

### GetFacilitySchedulerOptionOk

`func (o *ChangeInstructionType) GetFacilitySchedulerOptionOk() (*FacilitySchedulerOptionType, bool)`

GetFacilitySchedulerOptionOk returns a tuple with the FacilitySchedulerOption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFacilitySchedulerOption

`func (o *ChangeInstructionType) SetFacilitySchedulerOption(v FacilitySchedulerOptionType)`

SetFacilitySchedulerOption sets FacilitySchedulerOption field to given value.

### HasFacilitySchedulerOption

`func (o *ChangeInstructionType) HasFacilitySchedulerOption() bool`

HasFacilitySchedulerOption returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


