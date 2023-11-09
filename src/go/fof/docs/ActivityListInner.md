# ActivityListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityIds** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 
**Amount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Deposit** | Pointer to [**ActivityListInnerDeposit**](ActivityListInnerDeposit.md) |  | [optional] 
**Description** | Pointer to **[]string** | Description of the activity | [optional] 
**Duration** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**Extensions** | Pointer to **[]string** | Vendor extensions to the activity record. | [optional] 
**GroupCode** | Pointer to **string** | Any Block code associated with the activity if its a Group booking. | [optional] 
**InactiveDate** | Pointer to **string** | The Date by which the activity is deemed Cancelled/Deleted. | [optional] 
**Link** | Pointer to **bool** | When true indicates that activity link only needs to be inserted or deleted for this record. | [optional] 
**Location** | Pointer to **string** | The Location where the activity takes place. Eg: Salon | [optional] 
**Name** | Pointer to **[]string** | Name of the people for whom the activity is scheduled. Can be more than one but should be equal to the number of persons | [optional] 
**Note** | Pointer to **[]string** | Any additional notes or comments regarding the scheduled activity. | [optional] 
**NumberOfPersons** | Pointer to **int32** | The total number of the people for whom the activity is scheduled. Can be more than one but should be equal to the number of persons | [optional] 
**Participants** | Pointer to [**[]PersonNameType**](PersonNameType.md) | The names of the participants. | [optional] 
**Status** | Pointer to **string** | Activity reservation status. Typical examples are RESERVED, BOOKED, CANCELLED, and TENTATIVE. | [optional] 
**StatusDescription** | Pointer to **string** | Activity reservation status description. Typical examples are RESERVED, BOOKED, CANCELLED, and TENTATIVE. | [optional] 
**TimeSpan** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**Type** | Pointer to **string** | The Type of the activity. Eg: SPA, Golf etc. | [optional] 
**URLLink** | Pointer to **string** | The URL link to launch the Activity Reservation System to view or edit full details of this activity. | [optional] 

## Methods

### NewActivityListInner

`func NewActivityListInner() *ActivityListInner`

NewActivityListInner instantiates a new ActivityListInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityListInnerWithDefaults

`func NewActivityListInnerWithDefaults() *ActivityListInner`

NewActivityListInnerWithDefaults instantiates a new ActivityListInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityIds

`func (o *ActivityListInner) GetActivityIds() UniqueIDListType`

GetActivityIds returns the ActivityIds field if non-nil, zero value otherwise.

### GetActivityIdsOk

`func (o *ActivityListInner) GetActivityIdsOk() (*UniqueIDListType, bool)`

GetActivityIdsOk returns a tuple with the ActivityIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityIds

`func (o *ActivityListInner) SetActivityIds(v UniqueIDListType)`

SetActivityIds sets ActivityIds field to given value.

### HasActivityIds

`func (o *ActivityListInner) HasActivityIds() bool`

HasActivityIds returns a boolean if a field has been set.

### GetAmount

`func (o *ActivityListInner) GetAmount() CurrencyAmountType`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *ActivityListInner) GetAmountOk() (*CurrencyAmountType, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *ActivityListInner) SetAmount(v CurrencyAmountType)`

SetAmount sets Amount field to given value.

### HasAmount

`func (o *ActivityListInner) HasAmount() bool`

HasAmount returns a boolean if a field has been set.

### GetDeposit

`func (o *ActivityListInner) GetDeposit() ActivityListInnerDeposit`

GetDeposit returns the Deposit field if non-nil, zero value otherwise.

### GetDepositOk

`func (o *ActivityListInner) GetDepositOk() (*ActivityListInnerDeposit, bool)`

GetDepositOk returns a tuple with the Deposit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeposit

`func (o *ActivityListInner) SetDeposit(v ActivityListInnerDeposit)`

SetDeposit sets Deposit field to given value.

### HasDeposit

`func (o *ActivityListInner) HasDeposit() bool`

HasDeposit returns a boolean if a field has been set.

### GetDescription

`func (o *ActivityListInner) GetDescription() []string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ActivityListInner) GetDescriptionOk() (*[]string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ActivityListInner) SetDescription(v []string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ActivityListInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDuration

`func (o *ActivityListInner) GetDuration() DateTimeSpanType`

GetDuration returns the Duration field if non-nil, zero value otherwise.

### GetDurationOk

`func (o *ActivityListInner) GetDurationOk() (*DateTimeSpanType, bool)`

GetDurationOk returns a tuple with the Duration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDuration

`func (o *ActivityListInner) SetDuration(v DateTimeSpanType)`

SetDuration sets Duration field to given value.

### HasDuration

`func (o *ActivityListInner) HasDuration() bool`

HasDuration returns a boolean if a field has been set.

### GetExtensions

`func (o *ActivityListInner) GetExtensions() []string`

GetExtensions returns the Extensions field if non-nil, zero value otherwise.

### GetExtensionsOk

`func (o *ActivityListInner) GetExtensionsOk() (*[]string, bool)`

GetExtensionsOk returns a tuple with the Extensions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtensions

`func (o *ActivityListInner) SetExtensions(v []string)`

SetExtensions sets Extensions field to given value.

### HasExtensions

`func (o *ActivityListInner) HasExtensions() bool`

HasExtensions returns a boolean if a field has been set.

### GetGroupCode

`func (o *ActivityListInner) GetGroupCode() string`

GetGroupCode returns the GroupCode field if non-nil, zero value otherwise.

### GetGroupCodeOk

`func (o *ActivityListInner) GetGroupCodeOk() (*string, bool)`

GetGroupCodeOk returns a tuple with the GroupCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupCode

`func (o *ActivityListInner) SetGroupCode(v string)`

SetGroupCode sets GroupCode field to given value.

### HasGroupCode

`func (o *ActivityListInner) HasGroupCode() bool`

HasGroupCode returns a boolean if a field has been set.

### GetInactiveDate

`func (o *ActivityListInner) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *ActivityListInner) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *ActivityListInner) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *ActivityListInner) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetLink

`func (o *ActivityListInner) GetLink() bool`

GetLink returns the Link field if non-nil, zero value otherwise.

### GetLinkOk

`func (o *ActivityListInner) GetLinkOk() (*bool, bool)`

GetLinkOk returns a tuple with the Link field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLink

`func (o *ActivityListInner) SetLink(v bool)`

SetLink sets Link field to given value.

### HasLink

`func (o *ActivityListInner) HasLink() bool`

HasLink returns a boolean if a field has been set.

### GetLocation

`func (o *ActivityListInner) GetLocation() string`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *ActivityListInner) GetLocationOk() (*string, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *ActivityListInner) SetLocation(v string)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *ActivityListInner) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetName

`func (o *ActivityListInner) GetName() []string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ActivityListInner) GetNameOk() (*[]string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ActivityListInner) SetName(v []string)`

SetName sets Name field to given value.

### HasName

`func (o *ActivityListInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetNote

`func (o *ActivityListInner) GetNote() []string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *ActivityListInner) GetNoteOk() (*[]string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *ActivityListInner) SetNote(v []string)`

SetNote sets Note field to given value.

### HasNote

`func (o *ActivityListInner) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetNumberOfPersons

`func (o *ActivityListInner) GetNumberOfPersons() int32`

GetNumberOfPersons returns the NumberOfPersons field if non-nil, zero value otherwise.

### GetNumberOfPersonsOk

`func (o *ActivityListInner) GetNumberOfPersonsOk() (*int32, bool)`

GetNumberOfPersonsOk returns a tuple with the NumberOfPersons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfPersons

`func (o *ActivityListInner) SetNumberOfPersons(v int32)`

SetNumberOfPersons sets NumberOfPersons field to given value.

### HasNumberOfPersons

`func (o *ActivityListInner) HasNumberOfPersons() bool`

HasNumberOfPersons returns a boolean if a field has been set.

### GetParticipants

`func (o *ActivityListInner) GetParticipants() []PersonNameType`

GetParticipants returns the Participants field if non-nil, zero value otherwise.

### GetParticipantsOk

`func (o *ActivityListInner) GetParticipantsOk() (*[]PersonNameType, bool)`

GetParticipantsOk returns a tuple with the Participants field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParticipants

`func (o *ActivityListInner) SetParticipants(v []PersonNameType)`

SetParticipants sets Participants field to given value.

### HasParticipants

`func (o *ActivityListInner) HasParticipants() bool`

HasParticipants returns a boolean if a field has been set.

### GetStatus

`func (o *ActivityListInner) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ActivityListInner) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ActivityListInner) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ActivityListInner) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetStatusDescription

`func (o *ActivityListInner) GetStatusDescription() string`

GetStatusDescription returns the StatusDescription field if non-nil, zero value otherwise.

### GetStatusDescriptionOk

`func (o *ActivityListInner) GetStatusDescriptionOk() (*string, bool)`

GetStatusDescriptionOk returns a tuple with the StatusDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusDescription

`func (o *ActivityListInner) SetStatusDescription(v string)`

SetStatusDescription sets StatusDescription field to given value.

### HasStatusDescription

`func (o *ActivityListInner) HasStatusDescription() bool`

HasStatusDescription returns a boolean if a field has been set.

### GetTimeSpan

`func (o *ActivityListInner) GetTimeSpan() DateTimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *ActivityListInner) GetTimeSpanOk() (*DateTimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *ActivityListInner) SetTimeSpan(v DateTimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *ActivityListInner) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetType

`func (o *ActivityListInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ActivityListInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ActivityListInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ActivityListInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetURLLink

`func (o *ActivityListInner) GetURLLink() string`

GetURLLink returns the URLLink field if non-nil, zero value otherwise.

### GetURLLinkOk

`func (o *ActivityListInner) GetURLLinkOk() (*string, bool)`

GetURLLinkOk returns a tuple with the URLLink field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetURLLink

`func (o *ActivityListInner) SetURLLink(v string)`

SetURLLink sets URLLink field to given value.

### HasURLLink

`func (o *ActivityListInner) HasURLLink() bool`

HasURLLink returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


