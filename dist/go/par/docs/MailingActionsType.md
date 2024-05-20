# MailingActionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Active** | Pointer to **bool** | When true indicates that profile has subscribed to the mailing list. | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**MailingAction** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Defines mailing action code and description. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 

## Methods

### NewMailingActionsType

`func NewMailingActionsType() *MailingActionsType`

NewMailingActionsType instantiates a new MailingActionsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMailingActionsTypeWithDefaults

`func NewMailingActionsTypeWithDefaults() *MailingActionsType`

NewMailingActionsTypeWithDefaults instantiates a new MailingActionsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActive

`func (o *MailingActionsType) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *MailingActionsType) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *MailingActionsType) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *MailingActionsType) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetCount

`func (o *MailingActionsType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *MailingActionsType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *MailingActionsType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *MailingActionsType) HasCount() bool`

HasCount returns a boolean if a field has been set.

### GetHasMore

`func (o *MailingActionsType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *MailingActionsType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *MailingActionsType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *MailingActionsType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetMailingAction

`func (o *MailingActionsType) GetMailingAction() []CodeDescriptionType`

GetMailingAction returns the MailingAction field if non-nil, zero value otherwise.

### GetMailingActionOk

`func (o *MailingActionsType) GetMailingActionOk() (*[]CodeDescriptionType, bool)`

GetMailingActionOk returns a tuple with the MailingAction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMailingAction

`func (o *MailingActionsType) SetMailingAction(v []CodeDescriptionType)`

SetMailingAction sets MailingAction field to given value.

### HasMailingAction

`func (o *MailingActionsType) HasMailingAction() bool`

HasMailingAction returns a boolean if a field has been set.

### GetTotalResults

`func (o *MailingActionsType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *MailingActionsType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *MailingActionsType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *MailingActionsType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


