# CashierShiftDropLocationsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierShiftDropLocations** | Pointer to [**[]CashierShiftDropLocationType**](CashierShiftDropLocationType.md) | List of Cashier Shift Drop Locations. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCashierShiftDropLocationsDetails

`func NewCashierShiftDropLocationsDetails() *CashierShiftDropLocationsDetails`

NewCashierShiftDropLocationsDetails instantiates a new CashierShiftDropLocationsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCashierShiftDropLocationsDetailsWithDefaults

`func NewCashierShiftDropLocationsDetailsWithDefaults() *CashierShiftDropLocationsDetails`

NewCashierShiftDropLocationsDetailsWithDefaults instantiates a new CashierShiftDropLocationsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierShiftDropLocations

`func (o *CashierShiftDropLocationsDetails) GetCashierShiftDropLocations() []CashierShiftDropLocationType`

GetCashierShiftDropLocations returns the CashierShiftDropLocations field if non-nil, zero value otherwise.

### GetCashierShiftDropLocationsOk

`func (o *CashierShiftDropLocationsDetails) GetCashierShiftDropLocationsOk() (*[]CashierShiftDropLocationType, bool)`

GetCashierShiftDropLocationsOk returns a tuple with the CashierShiftDropLocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierShiftDropLocations

`func (o *CashierShiftDropLocationsDetails) SetCashierShiftDropLocations(v []CashierShiftDropLocationType)`

SetCashierShiftDropLocations sets CashierShiftDropLocations field to given value.

### HasCashierShiftDropLocations

`func (o *CashierShiftDropLocationsDetails) HasCashierShiftDropLocations() bool`

HasCashierShiftDropLocations returns a boolean if a field has been set.

### GetLinks

`func (o *CashierShiftDropLocationsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CashierShiftDropLocationsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CashierShiftDropLocationsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CashierShiftDropLocationsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CashierShiftDropLocationsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CashierShiftDropLocationsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CashierShiftDropLocationsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CashierShiftDropLocationsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


