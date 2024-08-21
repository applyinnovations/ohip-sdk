# ActivityDetailsTypeLinkedContacts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityContact** | Pointer to [**[]ActivityLinkedProfilesType**](ActivityLinkedProfilesType.md) | The list of contacts associated with an activity. | [optional] 
**FullOverlay** | Pointer to **bool** | Indicates whether to perform a full overlay for the contacts. | [optional] 

## Methods

### NewActivityDetailsTypeLinkedContacts

`func NewActivityDetailsTypeLinkedContacts() *ActivityDetailsTypeLinkedContacts`

NewActivityDetailsTypeLinkedContacts instantiates a new ActivityDetailsTypeLinkedContacts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityDetailsTypeLinkedContactsWithDefaults

`func NewActivityDetailsTypeLinkedContactsWithDefaults() *ActivityDetailsTypeLinkedContacts`

NewActivityDetailsTypeLinkedContactsWithDefaults instantiates a new ActivityDetailsTypeLinkedContacts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityContact

`func (o *ActivityDetailsTypeLinkedContacts) GetActivityContact() []ActivityLinkedProfilesType`

GetActivityContact returns the ActivityContact field if non-nil, zero value otherwise.

### GetActivityContactOk

`func (o *ActivityDetailsTypeLinkedContacts) GetActivityContactOk() (*[]ActivityLinkedProfilesType, bool)`

GetActivityContactOk returns a tuple with the ActivityContact field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityContact

`func (o *ActivityDetailsTypeLinkedContacts) SetActivityContact(v []ActivityLinkedProfilesType)`

SetActivityContact sets ActivityContact field to given value.

### HasActivityContact

`func (o *ActivityDetailsTypeLinkedContacts) HasActivityContact() bool`

HasActivityContact returns a boolean if a field has been set.

### GetFullOverlay

`func (o *ActivityDetailsTypeLinkedContacts) GetFullOverlay() bool`

GetFullOverlay returns the FullOverlay field if non-nil, zero value otherwise.

### GetFullOverlayOk

`func (o *ActivityDetailsTypeLinkedContacts) GetFullOverlayOk() (*bool, bool)`

GetFullOverlayOk returns a tuple with the FullOverlay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullOverlay

`func (o *ActivityDetailsTypeLinkedContacts) SetFullOverlay(v bool)`

SetFullOverlay sets FullOverlay field to given value.

### HasFullOverlay

`func (o *ActivityDetailsTypeLinkedContacts) HasFullOverlay() bool`

HasFullOverlay returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


