# LocationNotificationToBeCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ActivityTime** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**LocationText** | Pointer to [**FormattedTextTextType**](FormattedTextTextType.md) |  | [optional] 
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Description** | Pointer to [**FormattedTextTextType**](FormattedTextTextType.md) |  | [optional] 
**LocationNotificationStatus** | Pointer to [**LocationNotificationStatus**](LocationNotificationStatus.md) |  | [optional] 
**OtherLocationNotificationStatus** | Pointer to **string** |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewLocationNotificationToBeCreated

`func NewLocationNotificationToBeCreated() *LocationNotificationToBeCreated`

NewLocationNotificationToBeCreated instantiates a new LocationNotificationToBeCreated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLocationNotificationToBeCreatedWithDefaults

`func NewLocationNotificationToBeCreatedWithDefaults() *LocationNotificationToBeCreated`

NewLocationNotificationToBeCreatedWithDefaults instantiates a new LocationNotificationToBeCreated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationId

`func (o *LocationNotificationToBeCreated) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *LocationNotificationToBeCreated) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *LocationNotificationToBeCreated) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *LocationNotificationToBeCreated) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetActivityTime

`func (o *LocationNotificationToBeCreated) GetActivityTime() DateTimeSpanType`

GetActivityTime returns the ActivityTime field if non-nil, zero value otherwise.

### GetActivityTimeOk

`func (o *LocationNotificationToBeCreated) GetActivityTimeOk() (*DateTimeSpanType, bool)`

GetActivityTimeOk returns a tuple with the ActivityTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityTime

`func (o *LocationNotificationToBeCreated) SetActivityTime(v DateTimeSpanType)`

SetActivityTime sets ActivityTime field to given value.

### HasActivityTime

`func (o *LocationNotificationToBeCreated) HasActivityTime() bool`

HasActivityTime returns a boolean if a field has been set.

### GetLocationText

`func (o *LocationNotificationToBeCreated) GetLocationText() FormattedTextTextType`

GetLocationText returns the LocationText field if non-nil, zero value otherwise.

### GetLocationTextOk

`func (o *LocationNotificationToBeCreated) GetLocationTextOk() (*FormattedTextTextType, bool)`

GetLocationTextOk returns a tuple with the LocationText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocationText

`func (o *LocationNotificationToBeCreated) SetLocationText(v FormattedTextTextType)`

SetLocationText sets LocationText field to given value.

### HasLocationText

`func (o *LocationNotificationToBeCreated) HasLocationText() bool`

HasLocationText returns a boolean if a field has been set.

### GetProfileId

`func (o *LocationNotificationToBeCreated) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *LocationNotificationToBeCreated) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *LocationNotificationToBeCreated) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *LocationNotificationToBeCreated) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetDescription

`func (o *LocationNotificationToBeCreated) GetDescription() FormattedTextTextType`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *LocationNotificationToBeCreated) GetDescriptionOk() (*FormattedTextTextType, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *LocationNotificationToBeCreated) SetDescription(v FormattedTextTextType)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *LocationNotificationToBeCreated) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetLocationNotificationStatus

`func (o *LocationNotificationToBeCreated) GetLocationNotificationStatus() LocationNotificationStatus`

GetLocationNotificationStatus returns the LocationNotificationStatus field if non-nil, zero value otherwise.

### GetLocationNotificationStatusOk

`func (o *LocationNotificationToBeCreated) GetLocationNotificationStatusOk() (*LocationNotificationStatus, bool)`

GetLocationNotificationStatusOk returns a tuple with the LocationNotificationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocationNotificationStatus

`func (o *LocationNotificationToBeCreated) SetLocationNotificationStatus(v LocationNotificationStatus)`

SetLocationNotificationStatus sets LocationNotificationStatus field to given value.

### HasLocationNotificationStatus

`func (o *LocationNotificationToBeCreated) HasLocationNotificationStatus() bool`

HasLocationNotificationStatus returns a boolean if a field has been set.

### GetOtherLocationNotificationStatus

`func (o *LocationNotificationToBeCreated) GetOtherLocationNotificationStatus() string`

GetOtherLocationNotificationStatus returns the OtherLocationNotificationStatus field if non-nil, zero value otherwise.

### GetOtherLocationNotificationStatusOk

`func (o *LocationNotificationToBeCreated) GetOtherLocationNotificationStatusOk() (*string, bool)`

GetOtherLocationNotificationStatusOk returns a tuple with the OtherLocationNotificationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOtherLocationNotificationStatus

`func (o *LocationNotificationToBeCreated) SetOtherLocationNotificationStatus(v string)`

SetOtherLocationNotificationStatus sets OtherLocationNotificationStatus field to given value.

### HasOtherLocationNotificationStatus

`func (o *LocationNotificationToBeCreated) HasOtherLocationNotificationStatus() bool`

HasOtherLocationNotificationStatus returns a boolean if a field has been set.

### GetLinks

`func (o *LocationNotificationToBeCreated) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *LocationNotificationToBeCreated) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *LocationNotificationToBeCreated) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *LocationNotificationToBeCreated) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *LocationNotificationToBeCreated) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *LocationNotificationToBeCreated) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *LocationNotificationToBeCreated) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *LocationNotificationToBeCreated) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


