# ServiceTime

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ElapsedTime** | Pointer to **float32** | Total time in seconds spent in servicing the room. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewServiceTime

`func NewServiceTime() *ServiceTime`

NewServiceTime instantiates a new ServiceTime object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServiceTimeWithDefaults

`func NewServiceTimeWithDefaults() *ServiceTime`

NewServiceTimeWithDefaults instantiates a new ServiceTime object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetElapsedTime

`func (o *ServiceTime) GetElapsedTime() float32`

GetElapsedTime returns the ElapsedTime field if non-nil, zero value otherwise.

### GetElapsedTimeOk

`func (o *ServiceTime) GetElapsedTimeOk() (*float32, bool)`

GetElapsedTimeOk returns a tuple with the ElapsedTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElapsedTime

`func (o *ServiceTime) SetElapsedTime(v float32)`

SetElapsedTime sets ElapsedTime field to given value.

### HasElapsedTime

`func (o *ServiceTime) HasElapsedTime() bool`

HasElapsedTime returns a boolean if a field has been set.

### GetLinks

`func (o *ServiceTime) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ServiceTime) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ServiceTime) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ServiceTime) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ServiceTime) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ServiceTime) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ServiceTime) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ServiceTime) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


