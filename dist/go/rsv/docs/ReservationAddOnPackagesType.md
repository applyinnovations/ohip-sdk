# ReservationAddOnPackagesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationPackages** | Pointer to [**[]AddOnReservationPackageType**](AddOnReservationPackageType.md) | A Service object represents a package provided to guests. Service packages may have associated inventory and charges. | [optional] 
**OverridePackageConfiguration** | Pointer to **bool** | Indicates if scheduleList and calculationRule provided in this request should override package configuration. When overridePackageConfiguration is true the scheduleList is mandatory. | [optional] [default to true]
**OverrideInventoryItemAvailabilty** | Pointer to **bool** | Indicates if Availablity should be overriden when an Inventory Item based on a package is not available. | [optional] [default to false]

## Methods

### NewReservationAddOnPackagesType

`func NewReservationAddOnPackagesType() *ReservationAddOnPackagesType`

NewReservationAddOnPackagesType instantiates a new ReservationAddOnPackagesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationAddOnPackagesTypeWithDefaults

`func NewReservationAddOnPackagesTypeWithDefaults() *ReservationAddOnPackagesType`

NewReservationAddOnPackagesTypeWithDefaults instantiates a new ReservationAddOnPackagesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationPackages

`func (o *ReservationAddOnPackagesType) GetReservationPackages() []AddOnReservationPackageType`

GetReservationPackages returns the ReservationPackages field if non-nil, zero value otherwise.

### GetReservationPackagesOk

`func (o *ReservationAddOnPackagesType) GetReservationPackagesOk() (*[]AddOnReservationPackageType, bool)`

GetReservationPackagesOk returns a tuple with the ReservationPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPackages

`func (o *ReservationAddOnPackagesType) SetReservationPackages(v []AddOnReservationPackageType)`

SetReservationPackages sets ReservationPackages field to given value.

### HasReservationPackages

`func (o *ReservationAddOnPackagesType) HasReservationPackages() bool`

HasReservationPackages returns a boolean if a field has been set.

### GetOverridePackageConfiguration

`func (o *ReservationAddOnPackagesType) GetOverridePackageConfiguration() bool`

GetOverridePackageConfiguration returns the OverridePackageConfiguration field if non-nil, zero value otherwise.

### GetOverridePackageConfigurationOk

`func (o *ReservationAddOnPackagesType) GetOverridePackageConfigurationOk() (*bool, bool)`

GetOverridePackageConfigurationOk returns a tuple with the OverridePackageConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverridePackageConfiguration

`func (o *ReservationAddOnPackagesType) SetOverridePackageConfiguration(v bool)`

SetOverridePackageConfiguration sets OverridePackageConfiguration field to given value.

### HasOverridePackageConfiguration

`func (o *ReservationAddOnPackagesType) HasOverridePackageConfiguration() bool`

HasOverridePackageConfiguration returns a boolean if a field has been set.

### GetOverrideInventoryItemAvailabilty

`func (o *ReservationAddOnPackagesType) GetOverrideInventoryItemAvailabilty() bool`

GetOverrideInventoryItemAvailabilty returns the OverrideInventoryItemAvailabilty field if non-nil, zero value otherwise.

### GetOverrideInventoryItemAvailabiltyOk

`func (o *ReservationAddOnPackagesType) GetOverrideInventoryItemAvailabiltyOk() (*bool, bool)`

GetOverrideInventoryItemAvailabiltyOk returns a tuple with the OverrideInventoryItemAvailabilty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInventoryItemAvailabilty

`func (o *ReservationAddOnPackagesType) SetOverrideInventoryItemAvailabilty(v bool)`

SetOverrideInventoryItemAvailabilty sets OverrideInventoryItemAvailabilty field to given value.

### HasOverrideInventoryItemAvailabilty

`func (o *ReservationAddOnPackagesType) HasOverrideInventoryItemAvailabilty() bool`

HasOverrideInventoryItemAvailabilty returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


