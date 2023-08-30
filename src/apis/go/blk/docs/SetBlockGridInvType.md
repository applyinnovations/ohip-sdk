# SetBlockGridInvType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OnePerson** | Pointer to **int32** | Indicates the one person inventory value ( occupancy or availability ). | [optional] 
**TwoPerson** | Pointer to **int32** | Indicates the two person inventory value ( occupancy or availability ). | [optional] 
**ThreePerson** | Pointer to **int32** | Indicates the three person inventory value ( occupancy or availability ). | [optional] 
**FourPerson** | Pointer to **int32** | Indicates the four person inventory value ( occupancy or availability ). | [optional] 
**SellLimit** | Pointer to **int32** | Indicates the sell limit | [optional] 
**CutoffDate** | Pointer to **string** | Indicates the cutoff date.Date when inventory left in the block will be cut-off. | [optional] 
**ForceOverbook** | Pointer to **bool** | Indicates whether to overbook the rooms in case there are not enough rooms at the house or room type level. | [optional] 

## Methods

### NewSetBlockGridInvType

`func NewSetBlockGridInvType() *SetBlockGridInvType`

NewSetBlockGridInvType instantiates a new SetBlockGridInvType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetBlockGridInvTypeWithDefaults

`func NewSetBlockGridInvTypeWithDefaults() *SetBlockGridInvType`

NewSetBlockGridInvTypeWithDefaults instantiates a new SetBlockGridInvType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOnePerson

`func (o *SetBlockGridInvType) GetOnePerson() int32`

GetOnePerson returns the OnePerson field if non-nil, zero value otherwise.

### GetOnePersonOk

`func (o *SetBlockGridInvType) GetOnePersonOk() (*int32, bool)`

GetOnePersonOk returns a tuple with the OnePerson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnePerson

`func (o *SetBlockGridInvType) SetOnePerson(v int32)`

SetOnePerson sets OnePerson field to given value.

### HasOnePerson

`func (o *SetBlockGridInvType) HasOnePerson() bool`

HasOnePerson returns a boolean if a field has been set.

### GetTwoPerson

`func (o *SetBlockGridInvType) GetTwoPerson() int32`

GetTwoPerson returns the TwoPerson field if non-nil, zero value otherwise.

### GetTwoPersonOk

`func (o *SetBlockGridInvType) GetTwoPersonOk() (*int32, bool)`

GetTwoPersonOk returns a tuple with the TwoPerson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwoPerson

`func (o *SetBlockGridInvType) SetTwoPerson(v int32)`

SetTwoPerson sets TwoPerson field to given value.

### HasTwoPerson

`func (o *SetBlockGridInvType) HasTwoPerson() bool`

HasTwoPerson returns a boolean if a field has been set.

### GetThreePerson

`func (o *SetBlockGridInvType) GetThreePerson() int32`

GetThreePerson returns the ThreePerson field if non-nil, zero value otherwise.

### GetThreePersonOk

`func (o *SetBlockGridInvType) GetThreePersonOk() (*int32, bool)`

GetThreePersonOk returns a tuple with the ThreePerson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreePerson

`func (o *SetBlockGridInvType) SetThreePerson(v int32)`

SetThreePerson sets ThreePerson field to given value.

### HasThreePerson

`func (o *SetBlockGridInvType) HasThreePerson() bool`

HasThreePerson returns a boolean if a field has been set.

### GetFourPerson

`func (o *SetBlockGridInvType) GetFourPerson() int32`

GetFourPerson returns the FourPerson field if non-nil, zero value otherwise.

### GetFourPersonOk

`func (o *SetBlockGridInvType) GetFourPersonOk() (*int32, bool)`

GetFourPersonOk returns a tuple with the FourPerson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFourPerson

`func (o *SetBlockGridInvType) SetFourPerson(v int32)`

SetFourPerson sets FourPerson field to given value.

### HasFourPerson

`func (o *SetBlockGridInvType) HasFourPerson() bool`

HasFourPerson returns a boolean if a field has been set.

### GetSellLimit

`func (o *SetBlockGridInvType) GetSellLimit() int32`

GetSellLimit returns the SellLimit field if non-nil, zero value otherwise.

### GetSellLimitOk

`func (o *SetBlockGridInvType) GetSellLimitOk() (*int32, bool)`

GetSellLimitOk returns a tuple with the SellLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellLimit

`func (o *SetBlockGridInvType) SetSellLimit(v int32)`

SetSellLimit sets SellLimit field to given value.

### HasSellLimit

`func (o *SetBlockGridInvType) HasSellLimit() bool`

HasSellLimit returns a boolean if a field has been set.

### GetCutoffDate

`func (o *SetBlockGridInvType) GetCutoffDate() string`

GetCutoffDate returns the CutoffDate field if non-nil, zero value otherwise.

### GetCutoffDateOk

`func (o *SetBlockGridInvType) GetCutoffDateOk() (*string, bool)`

GetCutoffDateOk returns a tuple with the CutoffDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCutoffDate

`func (o *SetBlockGridInvType) SetCutoffDate(v string)`

SetCutoffDate sets CutoffDate field to given value.

### HasCutoffDate

`func (o *SetBlockGridInvType) HasCutoffDate() bool`

HasCutoffDate returns a boolean if a field has been set.

### GetForceOverbook

`func (o *SetBlockGridInvType) GetForceOverbook() bool`

GetForceOverbook returns the ForceOverbook field if non-nil, zero value otherwise.

### GetForceOverbookOk

`func (o *SetBlockGridInvType) GetForceOverbookOk() (*bool, bool)`

GetForceOverbookOk returns a tuple with the ForceOverbook field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceOverbook

`func (o *SetBlockGridInvType) SetForceOverbook(v bool)`

SetForceOverbook sets ForceOverbook field to given value.

### HasForceOverbook

`func (o *SetBlockGridInvType) HasForceOverbook() bool`

HasForceOverbook returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


