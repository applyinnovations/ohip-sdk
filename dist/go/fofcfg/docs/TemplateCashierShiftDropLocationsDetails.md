# TemplateCashierShiftDropLocationsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateCashierShiftDropLocations** | Pointer to [**[]TemplateCashierShiftDropLocationType**](TemplateCashierShiftDropLocationType.md) | List of Template Cashier Shift Drop Locations. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateCashierShiftDropLocationsDetails

`func NewTemplateCashierShiftDropLocationsDetails() *TemplateCashierShiftDropLocationsDetails`

NewTemplateCashierShiftDropLocationsDetails instantiates a new TemplateCashierShiftDropLocationsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateCashierShiftDropLocationsDetailsWithDefaults

`func NewTemplateCashierShiftDropLocationsDetailsWithDefaults() *TemplateCashierShiftDropLocationsDetails`

NewTemplateCashierShiftDropLocationsDetailsWithDefaults instantiates a new TemplateCashierShiftDropLocationsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TemplateCashierShiftDropLocationsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateCashierShiftDropLocationsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateCashierShiftDropLocationsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateCashierShiftDropLocationsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateCashierShiftDropLocations

`func (o *TemplateCashierShiftDropLocationsDetails) GetTemplateCashierShiftDropLocations() []TemplateCashierShiftDropLocationType`

GetTemplateCashierShiftDropLocations returns the TemplateCashierShiftDropLocations field if non-nil, zero value otherwise.

### GetTemplateCashierShiftDropLocationsOk

`func (o *TemplateCashierShiftDropLocationsDetails) GetTemplateCashierShiftDropLocationsOk() (*[]TemplateCashierShiftDropLocationType, bool)`

GetTemplateCashierShiftDropLocationsOk returns a tuple with the TemplateCashierShiftDropLocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateCashierShiftDropLocations

`func (o *TemplateCashierShiftDropLocationsDetails) SetTemplateCashierShiftDropLocations(v []TemplateCashierShiftDropLocationType)`

SetTemplateCashierShiftDropLocations sets TemplateCashierShiftDropLocations field to given value.

### HasTemplateCashierShiftDropLocations

`func (o *TemplateCashierShiftDropLocationsDetails) HasTemplateCashierShiftDropLocations() bool`

HasTemplateCashierShiftDropLocations returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateCashierShiftDropLocationsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateCashierShiftDropLocationsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateCashierShiftDropLocationsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateCashierShiftDropLocationsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


