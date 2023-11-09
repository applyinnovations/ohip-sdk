# AssignedRoom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EffectiveRates** | Pointer to [**EffectiveRatesType**](EffectiveRatesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**NewRates** | Pointer to [**DailyRatesType**](DailyRatesType.md) |  | [optional] 
**OldRates** | Pointer to [**DailyRatesType**](DailyRatesType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewAssignedRoom

`func NewAssignedRoom() *AssignedRoom`

NewAssignedRoom instantiates a new AssignedRoom object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAssignedRoomWithDefaults

`func NewAssignedRoomWithDefaults() *AssignedRoom`

NewAssignedRoomWithDefaults instantiates a new AssignedRoom object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEffectiveRates

`func (o *AssignedRoom) GetEffectiveRates() EffectiveRatesType`

GetEffectiveRates returns the EffectiveRates field if non-nil, zero value otherwise.

### GetEffectiveRatesOk

`func (o *AssignedRoom) GetEffectiveRatesOk() (*EffectiveRatesType, bool)`

GetEffectiveRatesOk returns a tuple with the EffectiveRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveRates

`func (o *AssignedRoom) SetEffectiveRates(v EffectiveRatesType)`

SetEffectiveRates sets EffectiveRates field to given value.

### HasEffectiveRates

`func (o *AssignedRoom) HasEffectiveRates() bool`

HasEffectiveRates returns a boolean if a field has been set.

### GetLinks

`func (o *AssignedRoom) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AssignedRoom) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AssignedRoom) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AssignedRoom) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNewRates

`func (o *AssignedRoom) GetNewRates() DailyRatesType`

GetNewRates returns the NewRates field if non-nil, zero value otherwise.

### GetNewRatesOk

`func (o *AssignedRoom) GetNewRatesOk() (*DailyRatesType, bool)`

GetNewRatesOk returns a tuple with the NewRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewRates

`func (o *AssignedRoom) SetNewRates(v DailyRatesType)`

SetNewRates sets NewRates field to given value.

### HasNewRates

`func (o *AssignedRoom) HasNewRates() bool`

HasNewRates returns a boolean if a field has been set.

### GetOldRates

`func (o *AssignedRoom) GetOldRates() DailyRatesType`

GetOldRates returns the OldRates field if non-nil, zero value otherwise.

### GetOldRatesOk

`func (o *AssignedRoom) GetOldRatesOk() (*DailyRatesType, bool)`

GetOldRatesOk returns a tuple with the OldRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldRates

`func (o *AssignedRoom) SetOldRates(v DailyRatesType)`

SetOldRates sets OldRates field to given value.

### HasOldRates

`func (o *AssignedRoom) HasOldRates() bool`

HasOldRates returns a boolean if a field has been set.

### GetWarnings

`func (o *AssignedRoom) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AssignedRoom) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AssignedRoom) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AssignedRoom) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


