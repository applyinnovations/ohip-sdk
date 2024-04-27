# ActivityDetailsTypeLinkedAccounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityAccount** | Pointer to [**[]ActivityLinkedProfilesType**](ActivityLinkedProfilesType.md) | The list of accounts associated with an activity. | [optional] 
**FullOverlay** | Pointer to **bool** | Indicates whether to perform a full overlay for the accounts. | [optional] 

## Methods

### NewActivityDetailsTypeLinkedAccounts

`func NewActivityDetailsTypeLinkedAccounts() *ActivityDetailsTypeLinkedAccounts`

NewActivityDetailsTypeLinkedAccounts instantiates a new ActivityDetailsTypeLinkedAccounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityDetailsTypeLinkedAccountsWithDefaults

`func NewActivityDetailsTypeLinkedAccountsWithDefaults() *ActivityDetailsTypeLinkedAccounts`

NewActivityDetailsTypeLinkedAccountsWithDefaults instantiates a new ActivityDetailsTypeLinkedAccounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityAccount

`func (o *ActivityDetailsTypeLinkedAccounts) GetActivityAccount() []ActivityLinkedProfilesType`

GetActivityAccount returns the ActivityAccount field if non-nil, zero value otherwise.

### GetActivityAccountOk

`func (o *ActivityDetailsTypeLinkedAccounts) GetActivityAccountOk() (*[]ActivityLinkedProfilesType, bool)`

GetActivityAccountOk returns a tuple with the ActivityAccount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityAccount

`func (o *ActivityDetailsTypeLinkedAccounts) SetActivityAccount(v []ActivityLinkedProfilesType)`

SetActivityAccount sets ActivityAccount field to given value.

### HasActivityAccount

`func (o *ActivityDetailsTypeLinkedAccounts) HasActivityAccount() bool`

HasActivityAccount returns a boolean if a field has been set.

### GetFullOverlay

`func (o *ActivityDetailsTypeLinkedAccounts) GetFullOverlay() bool`

GetFullOverlay returns the FullOverlay field if non-nil, zero value otherwise.

### GetFullOverlayOk

`func (o *ActivityDetailsTypeLinkedAccounts) GetFullOverlayOk() (*bool, bool)`

GetFullOverlayOk returns a tuple with the FullOverlay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullOverlay

`func (o *ActivityDetailsTypeLinkedAccounts) SetFullOverlay(v bool)`

SetFullOverlay sets FullOverlay field to given value.

### HasFullOverlay

`func (o *ActivityDetailsTypeLinkedAccounts) HasFullOverlay() bool`

HasFullOverlay returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


