# ChangeTemplateCashierShiftDropLocationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TemplateCashierShiftDropLocations** | Pointer to [**[]TemplateCashierShiftDropLocationType**](TemplateCashierShiftDropLocationType.md) | List of Template Cashier Shift Drop Locations. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTemplateCashierShiftDropLocationsRequest

`func NewChangeTemplateCashierShiftDropLocationsRequest() *ChangeTemplateCashierShiftDropLocationsRequest`

NewChangeTemplateCashierShiftDropLocationsRequest instantiates a new ChangeTemplateCashierShiftDropLocationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTemplateCashierShiftDropLocationsRequestWithDefaults

`func NewChangeTemplateCashierShiftDropLocationsRequestWithDefaults() *ChangeTemplateCashierShiftDropLocationsRequest`

NewChangeTemplateCashierShiftDropLocationsRequestWithDefaults instantiates a new ChangeTemplateCashierShiftDropLocationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTemplateCashierShiftDropLocationsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTemplateCashierShiftDropLocationsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTemplateCashierShiftDropLocationsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTemplateCashierShiftDropLocationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTemplateCashierShiftDropLocations

`func (o *ChangeTemplateCashierShiftDropLocationsRequest) GetTemplateCashierShiftDropLocations() []TemplateCashierShiftDropLocationType`

GetTemplateCashierShiftDropLocations returns the TemplateCashierShiftDropLocations field if non-nil, zero value otherwise.

### GetTemplateCashierShiftDropLocationsOk

`func (o *ChangeTemplateCashierShiftDropLocationsRequest) GetTemplateCashierShiftDropLocationsOk() (*[]TemplateCashierShiftDropLocationType, bool)`

GetTemplateCashierShiftDropLocationsOk returns a tuple with the TemplateCashierShiftDropLocations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateCashierShiftDropLocations

`func (o *ChangeTemplateCashierShiftDropLocationsRequest) SetTemplateCashierShiftDropLocations(v []TemplateCashierShiftDropLocationType)`

SetTemplateCashierShiftDropLocations sets TemplateCashierShiftDropLocations field to given value.

### HasTemplateCashierShiftDropLocations

`func (o *ChangeTemplateCashierShiftDropLocationsRequest) HasTemplateCashierShiftDropLocations() bool`

HasTemplateCashierShiftDropLocations returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTemplateCashierShiftDropLocationsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTemplateCashierShiftDropLocationsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTemplateCashierShiftDropLocationsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTemplateCashierShiftDropLocationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


