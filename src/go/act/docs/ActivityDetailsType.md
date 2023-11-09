# ActivityDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityDetail** | Pointer to [**ActivityInfoType**](ActivityInfoType.md) |  | [optional] 
**ActivityId** | Pointer to [**ActivityId**](ActivityId.md) |  | [optional] 
**Indicators** | Pointer to [**IndicatorsType**](IndicatorsType.md) |  | [optional] 
**LinkedAccounts** | Pointer to [**ActivityDetailsTypeLinkedAccounts**](ActivityDetailsTypeLinkedAccounts.md) |  | [optional] 
**LinkedActivities** | Pointer to [**[]LinkedActivityDetailsType**](LinkedActivityDetailsType.md) | The list of activities associated with an activity. | [optional] 
**LinkedAttachments** | Pointer to [**AttachmentsType**](AttachmentsType.md) |  | [optional] 
**LinkedBlocks** | Pointer to [**BlockListType**](BlockListType.md) |  | [optional] 
**LinkedContacts** | Pointer to [**ActivityDetailsTypeLinkedContacts**](ActivityDetailsTypeLinkedContacts.md) |  | [optional] 

## Methods

### NewActivityDetailsType

`func NewActivityDetailsType() *ActivityDetailsType`

NewActivityDetailsType instantiates a new ActivityDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityDetailsTypeWithDefaults

`func NewActivityDetailsTypeWithDefaults() *ActivityDetailsType`

NewActivityDetailsTypeWithDefaults instantiates a new ActivityDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityDetail

`func (o *ActivityDetailsType) GetActivityDetail() ActivityInfoType`

GetActivityDetail returns the ActivityDetail field if non-nil, zero value otherwise.

### GetActivityDetailOk

`func (o *ActivityDetailsType) GetActivityDetailOk() (*ActivityInfoType, bool)`

GetActivityDetailOk returns a tuple with the ActivityDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityDetail

`func (o *ActivityDetailsType) SetActivityDetail(v ActivityInfoType)`

SetActivityDetail sets ActivityDetail field to given value.

### HasActivityDetail

`func (o *ActivityDetailsType) HasActivityDetail() bool`

HasActivityDetail returns a boolean if a field has been set.

### GetActivityId

`func (o *ActivityDetailsType) GetActivityId() ActivityId`

GetActivityId returns the ActivityId field if non-nil, zero value otherwise.

### GetActivityIdOk

`func (o *ActivityDetailsType) GetActivityIdOk() (*ActivityId, bool)`

GetActivityIdOk returns a tuple with the ActivityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityId

`func (o *ActivityDetailsType) SetActivityId(v ActivityId)`

SetActivityId sets ActivityId field to given value.

### HasActivityId

`func (o *ActivityDetailsType) HasActivityId() bool`

HasActivityId returns a boolean if a field has been set.

### GetIndicators

`func (o *ActivityDetailsType) GetIndicators() IndicatorsType`

GetIndicators returns the Indicators field if non-nil, zero value otherwise.

### GetIndicatorsOk

`func (o *ActivityDetailsType) GetIndicatorsOk() (*IndicatorsType, bool)`

GetIndicatorsOk returns a tuple with the Indicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndicators

`func (o *ActivityDetailsType) SetIndicators(v IndicatorsType)`

SetIndicators sets Indicators field to given value.

### HasIndicators

`func (o *ActivityDetailsType) HasIndicators() bool`

HasIndicators returns a boolean if a field has been set.

### GetLinkedAccounts

`func (o *ActivityDetailsType) GetLinkedAccounts() ActivityDetailsTypeLinkedAccounts`

GetLinkedAccounts returns the LinkedAccounts field if non-nil, zero value otherwise.

### GetLinkedAccountsOk

`func (o *ActivityDetailsType) GetLinkedAccountsOk() (*ActivityDetailsTypeLinkedAccounts, bool)`

GetLinkedAccountsOk returns a tuple with the LinkedAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedAccounts

`func (o *ActivityDetailsType) SetLinkedAccounts(v ActivityDetailsTypeLinkedAccounts)`

SetLinkedAccounts sets LinkedAccounts field to given value.

### HasLinkedAccounts

`func (o *ActivityDetailsType) HasLinkedAccounts() bool`

HasLinkedAccounts returns a boolean if a field has been set.

### GetLinkedActivities

`func (o *ActivityDetailsType) GetLinkedActivities() []LinkedActivityDetailsType`

GetLinkedActivities returns the LinkedActivities field if non-nil, zero value otherwise.

### GetLinkedActivitiesOk

`func (o *ActivityDetailsType) GetLinkedActivitiesOk() (*[]LinkedActivityDetailsType, bool)`

GetLinkedActivitiesOk returns a tuple with the LinkedActivities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedActivities

`func (o *ActivityDetailsType) SetLinkedActivities(v []LinkedActivityDetailsType)`

SetLinkedActivities sets LinkedActivities field to given value.

### HasLinkedActivities

`func (o *ActivityDetailsType) HasLinkedActivities() bool`

HasLinkedActivities returns a boolean if a field has been set.

### GetLinkedAttachments

`func (o *ActivityDetailsType) GetLinkedAttachments() AttachmentsType`

GetLinkedAttachments returns the LinkedAttachments field if non-nil, zero value otherwise.

### GetLinkedAttachmentsOk

`func (o *ActivityDetailsType) GetLinkedAttachmentsOk() (*AttachmentsType, bool)`

GetLinkedAttachmentsOk returns a tuple with the LinkedAttachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedAttachments

`func (o *ActivityDetailsType) SetLinkedAttachments(v AttachmentsType)`

SetLinkedAttachments sets LinkedAttachments field to given value.

### HasLinkedAttachments

`func (o *ActivityDetailsType) HasLinkedAttachments() bool`

HasLinkedAttachments returns a boolean if a field has been set.

### GetLinkedBlocks

`func (o *ActivityDetailsType) GetLinkedBlocks() BlockListType`

GetLinkedBlocks returns the LinkedBlocks field if non-nil, zero value otherwise.

### GetLinkedBlocksOk

`func (o *ActivityDetailsType) GetLinkedBlocksOk() (*BlockListType, bool)`

GetLinkedBlocksOk returns a tuple with the LinkedBlocks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedBlocks

`func (o *ActivityDetailsType) SetLinkedBlocks(v BlockListType)`

SetLinkedBlocks sets LinkedBlocks field to given value.

### HasLinkedBlocks

`func (o *ActivityDetailsType) HasLinkedBlocks() bool`

HasLinkedBlocks returns a boolean if a field has been set.

### GetLinkedContacts

`func (o *ActivityDetailsType) GetLinkedContacts() ActivityDetailsTypeLinkedContacts`

GetLinkedContacts returns the LinkedContacts field if non-nil, zero value otherwise.

### GetLinkedContactsOk

`func (o *ActivityDetailsType) GetLinkedContactsOk() (*ActivityDetailsTypeLinkedContacts, bool)`

GetLinkedContactsOk returns a tuple with the LinkedContacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedContacts

`func (o *ActivityDetailsType) SetLinkedContacts(v ActivityDetailsTypeLinkedContacts)`

SetLinkedContacts sets LinkedContacts field to given value.

### HasLinkedContacts

`func (o *ActivityDetailsType) HasLinkedContacts() bool`

HasLinkedContacts returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


