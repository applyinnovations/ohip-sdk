# RateClassDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RateClasses** | Pointer to [**RateClassDetailsRateClasses**](RateClassDetailsRateClasses.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRateClassDetails

`func NewRateClassDetails() *RateClassDetails`

NewRateClassDetails instantiates a new RateClassDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateClassDetailsWithDefaults

`func NewRateClassDetailsWithDefaults() *RateClassDetails`

NewRateClassDetailsWithDefaults instantiates a new RateClassDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RateClassDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateClassDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateClassDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateClassDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateClasses

`func (o *RateClassDetails) GetRateClasses() RateClassDetailsRateClasses`

GetRateClasses returns the RateClasses field if non-nil, zero value otherwise.

### GetRateClassesOk

`func (o *RateClassDetails) GetRateClassesOk() (*RateClassDetailsRateClasses, bool)`

GetRateClassesOk returns a tuple with the RateClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateClasses

`func (o *RateClassDetails) SetRateClasses(v RateClassDetailsRateClasses)`

SetRateClasses sets RateClasses field to given value.

### HasRateClasses

`func (o *RateClassDetails) HasRateClasses() bool`

HasRateClasses returns a boolean if a field has been set.

### GetWarnings

`func (o *RateClassDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RateClassDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RateClassDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RateClassDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


