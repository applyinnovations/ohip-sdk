# MailingActionsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MailingAction** | Pointer to [**[]CodeDescriptionType**](CodeDescriptionType.md) | Defines mailing action code and description. | [optional] 
**Active** | Pointer to **bool** | When true indicates that profile has subscribed to the mailing list. | [optional] 
**TotalRows** | Pointer to **int32** | Total number of rows queried | [optional] 

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

### GetTotalRows

`func (o *MailingActionsType) GetTotalRows() int32`

GetTotalRows returns the TotalRows field if non-nil, zero value otherwise.

### GetTotalRowsOk

`func (o *MailingActionsType) GetTotalRowsOk() (*int32, bool)`

GetTotalRowsOk returns a tuple with the TotalRows field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalRows

`func (o *MailingActionsType) SetTotalRows(v int32)`

SetTotalRows sets TotalRows field to given value.

### HasTotalRows

`func (o *MailingActionsType) HasTotalRows() bool`

HasTotalRows returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


