# GeneralAvailabilitySimulator

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GeneralAvailability** | Pointer to [**GeneralAvailSimulatorType**](GeneralAvailSimulatorType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewGeneralAvailabilitySimulator

`func NewGeneralAvailabilitySimulator() *GeneralAvailabilitySimulator`

NewGeneralAvailabilitySimulator instantiates a new GeneralAvailabilitySimulator object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGeneralAvailabilitySimulatorWithDefaults

`func NewGeneralAvailabilitySimulatorWithDefaults() *GeneralAvailabilitySimulator`

NewGeneralAvailabilitySimulatorWithDefaults instantiates a new GeneralAvailabilitySimulator object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGeneralAvailability

`func (o *GeneralAvailabilitySimulator) GetGeneralAvailability() GeneralAvailSimulatorType`

GetGeneralAvailability returns the GeneralAvailability field if non-nil, zero value otherwise.

### GetGeneralAvailabilityOk

`func (o *GeneralAvailabilitySimulator) GetGeneralAvailabilityOk() (*GeneralAvailSimulatorType, bool)`

GetGeneralAvailabilityOk returns a tuple with the GeneralAvailability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneralAvailability

`func (o *GeneralAvailabilitySimulator) SetGeneralAvailability(v GeneralAvailSimulatorType)`

SetGeneralAvailability sets GeneralAvailability field to given value.

### HasGeneralAvailability

`func (o *GeneralAvailabilitySimulator) HasGeneralAvailability() bool`

HasGeneralAvailability returns a boolean if a field has been set.

### GetLinks

`func (o *GeneralAvailabilitySimulator) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GeneralAvailabilitySimulator) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GeneralAvailabilitySimulator) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GeneralAvailabilitySimulator) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GeneralAvailabilitySimulator) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GeneralAvailabilitySimulator) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GeneralAvailabilitySimulator) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GeneralAvailabilitySimulator) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


