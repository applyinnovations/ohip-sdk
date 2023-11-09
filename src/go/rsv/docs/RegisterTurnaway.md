# RegisterTurnaway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Turnaway** | Pointer to [**TurnawayType**](TurnawayType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRegisterTurnaway

`func NewRegisterTurnaway() *RegisterTurnaway`

NewRegisterTurnaway instantiates a new RegisterTurnaway object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRegisterTurnawayWithDefaults

`func NewRegisterTurnawayWithDefaults() *RegisterTurnaway`

NewRegisterTurnawayWithDefaults instantiates a new RegisterTurnaway object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RegisterTurnaway) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RegisterTurnaway) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RegisterTurnaway) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RegisterTurnaway) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTurnaway

`func (o *RegisterTurnaway) GetTurnaway() TurnawayType`

GetTurnaway returns the Turnaway field if non-nil, zero value otherwise.

### GetTurnawayOk

`func (o *RegisterTurnaway) GetTurnawayOk() (*TurnawayType, bool)`

GetTurnawayOk returns a tuple with the Turnaway field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurnaway

`func (o *RegisterTurnaway) SetTurnaway(v TurnawayType)`

SetTurnaway sets Turnaway field to given value.

### HasTurnaway

`func (o *RegisterTurnaway) HasTurnaway() bool`

HasTurnaway returns a boolean if a field has been set.

### GetWarnings

`func (o *RegisterTurnaway) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RegisterTurnaway) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RegisterTurnaway) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RegisterTurnaway) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


