# ActivityDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityId** | Pointer to [**ActivityId**](ActivityId.md) |  | [optional] 
**ActivityDetail** | Pointer to [**ActivityInfoType**](ActivityInfoType.md) |  | [optional] 
**LinkedAccounts** | Pointer to [**ActivityDetailsTypeLinkedAccounts**](ActivityDetailsTypeLinkedAccounts.md) |  | [optional] 
**LinkedContacts** | Pointer to [**ActivityDetailsTypeLinkedContacts**](ActivityDetailsTypeLinkedContacts.md) |  | [optional] 
**LinkedBlocks** | Pointer to [**[]ActivityBlockInfoType**](ActivityBlockInfoType.md) | List of Blocks that are linked to the Activity. | [optional] 
**LinkedAttachments** | Pointer to [**[]AttachmentType**](AttachmentType.md) | Attachment List. | [optional] 
**LinkedActivities** | Pointer to [**[]LinkedActivityDetailsType**](LinkedActivityDetailsType.md) | The list of activities associated with an activity. | [optional] 
**Indicators** | Pointer to [**[]IndicatorType**](IndicatorType.md) | Collection of lamp indicators. | [optional] 

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

### GetLinkedBlocks

`func (o *ActivityDetailsType) GetLinkedBlocks() []ActivityBlockInfoType`

GetLinkedBlocks returns the LinkedBlocks field if non-nil, zero value otherwise.

### GetLinkedBlocksOk

`func (o *ActivityDetailsType) GetLinkedBlocksOk() (*[]ActivityBlockInfoType, bool)`

GetLinkedBlocksOk returns a tuple with the LinkedBlocks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedBlocks

`func (o *ActivityDetailsType) SetLinkedBlocks(v []ActivityBlockInfoType)`

SetLinkedBlocks sets LinkedBlocks field to given value.

### HasLinkedBlocks

`func (o *ActivityDetailsType) HasLinkedBlocks() bool`

HasLinkedBlocks returns a boolean if a field has been set.

### GetLinkedAttachments

`func (o *ActivityDetailsType) GetLinkedAttachments() []AttachmentType`

GetLinkedAttachments returns the LinkedAttachments field if non-nil, zero value otherwise.

### GetLinkedAttachmentsOk

`func (o *ActivityDetailsType) GetLinkedAttachmentsOk() (*[]AttachmentType, bool)`

GetLinkedAttachmentsOk returns a tuple with the LinkedAttachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkedAttachments

`func (o *ActivityDetailsType) SetLinkedAttachments(v []AttachmentType)`

SetLinkedAttachments sets LinkedAttachments field to given value.

### HasLinkedAttachments

`func (o *ActivityDetailsType) HasLinkedAttachments() bool`

HasLinkedAttachments returns a boolean if a field has been set.

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

### GetIndicators

`func (o *ActivityDetailsType) GetIndicators() []IndicatorType`

GetIndicators returns the Indicators field if non-nil, zero value otherwise.

### GetIndicatorsOk

`func (o *ActivityDetailsType) GetIndicatorsOk() (*[]IndicatorType, bool)`

GetIndicatorsOk returns a tuple with the Indicators field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndicators

`func (o *ActivityDetailsType) SetIndicators(v []IndicatorType)`

SetIndicators sets Indicators field to given value.

### HasIndicators

`func (o *ActivityDetailsType) HasIndicators() bool`

HasIndicators returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


