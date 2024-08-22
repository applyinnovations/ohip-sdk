# Traces

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Traces** | Pointer to [**[]HotelReservationTraceType**](HotelReservationTraceType.md) | List of Reservation Traces. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTraces

`func NewTraces() *Traces`

NewTraces instantiates a new Traces object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTracesWithDefaults

`func NewTracesWithDefaults() *Traces`

NewTracesWithDefaults instantiates a new Traces object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *Traces) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Traces) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Traces) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Traces) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTraces

`func (o *Traces) GetTraces() []HotelReservationTraceType`

GetTraces returns the Traces field if non-nil, zero value otherwise.

### GetTracesOk

`func (o *Traces) GetTracesOk() (*[]HotelReservationTraceType, bool)`

GetTracesOk returns a tuple with the Traces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraces

`func (o *Traces) SetTraces(v []HotelReservationTraceType)`

SetTraces sets Traces field to given value.

### HasTraces

`func (o *Traces) HasTraces() bool`

HasTraces returns a boolean if a field has been set.

### GetWarnings

`func (o *Traces) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Traces) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Traces) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Traces) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


