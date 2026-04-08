# AlternateAvailability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alternates** | Pointer to [**[]AlternateAvailDateType**](AlternateAvailDateType.md) | List of alternate dates. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAlternateAvailability

`func NewAlternateAvailability() *AlternateAvailability`

NewAlternateAvailability instantiates a new AlternateAvailability object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAlternateAvailabilityWithDefaults

`func NewAlternateAvailabilityWithDefaults() *AlternateAvailability`

NewAlternateAvailabilityWithDefaults instantiates a new AlternateAvailability object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAlternates

`func (o *AlternateAvailability) GetAlternates() []AlternateAvailDateType`

GetAlternates returns the Alternates field if non-nil, zero value otherwise.

### GetAlternatesOk

`func (o *AlternateAvailability) GetAlternatesOk() (*[]AlternateAvailDateType, bool)`

GetAlternatesOk returns a tuple with the Alternates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternates

`func (o *AlternateAvailability) SetAlternates(v []AlternateAvailDateType)`

SetAlternates sets Alternates field to given value.

### HasAlternates

`func (o *AlternateAvailability) HasAlternates() bool`

HasAlternates returns a boolean if a field has been set.

### GetLinks

`func (o *AlternateAvailability) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AlternateAvailability) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AlternateAvailability) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AlternateAvailability) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AlternateAvailability) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AlternateAvailability) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AlternateAvailability) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AlternateAvailability) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


