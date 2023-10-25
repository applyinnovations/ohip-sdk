# ChangeCashierShiftDropLocationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CashierShiftDropLocations** | Pointer to [**[]CashierShiftDropLocationType**](CashierShiftDropLocationType.md) | List of Cashier Shift Drop Locations. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeCashierShiftDropLocationsRequest

`func NewChangeCashierShiftDropLocationsRequest() *ChangeCashierShiftDropLocationsRequest`

NewChangeCashierShiftDropLocationsRequest instantiates a new ChangeCashierShiftDropLocationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeCashierShiftDropLocationsRequestWithDefaults

`func NewChangeCashierShiftDropLocationsRequestWithDefaults() *ChangeCashierShiftDropLocationsRequest`

NewChangeCashierShiftDropLocationsRequestWithDefaults instantiates a new ChangeCashierShiftDropLocationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashierShiftDropLocations

`func (o *ChangeCashierShiftDropLocationsRequest) GetCashierShiftDropLocations() []CashierShiftDropLocationType`

GetCashierShiftDropLocations returns the CashierShiftDropLocations field if non-nil, zero value otherwise.

### GetCashierShiftDropLocationsOk

`func (o *ChangeCashierShiftDropLocationsRequest) GetCashierShiftDropLocationsOk() (*[]CashierShiftDropLocationType, bool)`

GetCashierShiftDropLocationsOk returns a tuple with the CashierShiftDropLocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierShiftDropLocations

`func (o *ChangeCashierShiftDropLocationsRequest) SetCashierShiftDropLocations(v []CashierShiftDropLocationType)`

SetCashierShiftDropLocations sets CashierShiftDropLocations field to given value.

### HasCashierShiftDropLocations

`func (o *ChangeCashierShiftDropLocationsRequest) HasCashierShiftDropLocations() bool`

HasCashierShiftDropLocations returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeCashierShiftDropLocationsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeCashierShiftDropLocationsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeCashierShiftDropLocationsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeCashierShiftDropLocationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeCashierShiftDropLocationsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeCashierShiftDropLocationsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeCashierShiftDropLocationsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeCashierShiftDropLocationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


