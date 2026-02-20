# ReservationCommentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Text** | Pointer to **string** | Specifies Comment&#39;s Text | [optional] 
**CommentTitle** | Pointer to **string** | Specifies Comment&#39;s Title. | [optional] 
**NotificationLocation** | Pointer to **string** | Notification Location associated with the Note. | [optional] 
**Type** | Pointer to **string** | Specifies type of the comment. | [optional] 
**Internal** | Pointer to **bool** | When true, the comment may not be shown to the consumer. When false, the comment may be shown to the consumer. | [optional] [default to false]

## Methods

### NewReservationCommentType

`func NewReservationCommentType() *ReservationCommentType`

NewReservationCommentType instantiates a new ReservationCommentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationCommentTypeWithDefaults

`func NewReservationCommentTypeWithDefaults() *ReservationCommentType`

NewReservationCommentTypeWithDefaults instantiates a new ReservationCommentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetText

`func (o *ReservationCommentType) GetText() string`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *ReservationCommentType) GetTextOk() (*string, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *ReservationCommentType) SetText(v string)`

SetText sets Text field to given value.

### HasText

`func (o *ReservationCommentType) HasText() bool`

HasText returns a boolean if a field has been set.

### GetCommentTitle

`func (o *ReservationCommentType) GetCommentTitle() string`

GetCommentTitle returns the CommentTitle field if non-nil, zero value otherwise.

### GetCommentTitleOk

`func (o *ReservationCommentType) GetCommentTitleOk() (*string, bool)`

GetCommentTitleOk returns a tuple with the CommentTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentTitle

`func (o *ReservationCommentType) SetCommentTitle(v string)`

SetCommentTitle sets CommentTitle field to given value.

### HasCommentTitle

`func (o *ReservationCommentType) HasCommentTitle() bool`

HasCommentTitle returns a boolean if a field has been set.

### GetNotificationLocation

`func (o *ReservationCommentType) GetNotificationLocation() string`

GetNotificationLocation returns the NotificationLocation field if non-nil, zero value otherwise.

### GetNotificationLocationOk

`func (o *ReservationCommentType) GetNotificationLocationOk() (*string, bool)`

GetNotificationLocationOk returns a tuple with the NotificationLocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationLocation

`func (o *ReservationCommentType) SetNotificationLocation(v string)`

SetNotificationLocation sets NotificationLocation field to given value.

### HasNotificationLocation

`func (o *ReservationCommentType) HasNotificationLocation() bool`

HasNotificationLocation returns a boolean if a field has been set.

### GetType

`func (o *ReservationCommentType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReservationCommentType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReservationCommentType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ReservationCommentType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInternal

`func (o *ReservationCommentType) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *ReservationCommentType) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *ReservationCommentType) SetInternal(v bool)`

SetInternal sets Internal field to given value.

### HasInternal

`func (o *ReservationCommentType) HasInternal() bool`

HasInternal returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


