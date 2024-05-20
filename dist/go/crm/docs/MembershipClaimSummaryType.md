# MembershipClaimSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityLog** | Pointer to [**[]ClaimActivityLogType**](ClaimActivityLogType.md) | Summary of claim activity log information. | [optional] 
**ApprovalStatus** | Pointer to [**ClaimApprovalStatusType**](ClaimApprovalStatusType.md) |  | [optional] 
**Arrival** | Pointer to **string** | Arrival date for the stay associated with this claim. | [optional] 
**CallerInformation** | Pointer to **string** | More information related to call that help to resolve the claim.. | [optional] 
**CallerName** | Pointer to **string** | Name of the person placing the claim. This name may be different from the name on the membership card. | [optional] 
**ClaimDate** | Pointer to **string** | Date the claim was made. | [optional] 
**ClaimNo** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ClaimStatus** | Pointer to **string** | Status of the claim.(Open, Closed, Pending Review, Waiting for Manager, etc.) | [optional] 
**ClaimType** | Pointer to **string** | Type of user-definable claim such as New Card, Stay, etc. | [optional] 
**CloseDate** | Pointer to **string** | If the status is closed, the date the claim was closed. | [optional] 
**ConfirmationNo** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Departure** | Pointer to **string** | Departure date for the stay associated with this claim. | [optional] 
**HotelId** | Pointer to **string** | Property where the stay took place. | [optional] 
**MembershipId** | Pointer to **string** | Indicates membership card number of the guest. | [optional] 
**MembershipIdNo** | Pointer to **float32** | Membership ID Number. | [optional] 
**MembershipType** | Pointer to **string** | Membership Type code. | [optional] 
**Origin** | Pointer to **string** | Origin of the membership claim. User definable values like Email, Fax, Phone Call, etc. | [optional] 
**Owner** | Pointer to **string** | User who is assigned to handle this claim. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**RecordType** | Pointer to [**ClaimRecordType**](ClaimRecordType.md) |  | [optional] 
**ReplyBy** | Pointer to **string** | The date, if any, by which a response to the caller was promised. | [optional] 
**Source** | Pointer to [**ClaimSourceType**](ClaimSourceType.md) |  | [optional] 
**Submitter** | Pointer to **string** | User who entered this claim. | [optional] 

## Methods

### NewMembershipClaimSummaryType

`func NewMembershipClaimSummaryType() *MembershipClaimSummaryType`

NewMembershipClaimSummaryType instantiates a new MembershipClaimSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipClaimSummaryTypeWithDefaults

`func NewMembershipClaimSummaryTypeWithDefaults() *MembershipClaimSummaryType`

NewMembershipClaimSummaryTypeWithDefaults instantiates a new MembershipClaimSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityLog

`func (o *MembershipClaimSummaryType) GetActivityLog() []ClaimActivityLogType`

GetActivityLog returns the ActivityLog field if non-nil, zero value otherwise.

### GetActivityLogOk

`func (o *MembershipClaimSummaryType) GetActivityLogOk() (*[]ClaimActivityLogType, bool)`

GetActivityLogOk returns a tuple with the ActivityLog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityLog

`func (o *MembershipClaimSummaryType) SetActivityLog(v []ClaimActivityLogType)`

SetActivityLog sets ActivityLog field to given value.

### HasActivityLog

`func (o *MembershipClaimSummaryType) HasActivityLog() bool`

HasActivityLog returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *MembershipClaimSummaryType) GetApprovalStatus() ClaimApprovalStatusType`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *MembershipClaimSummaryType) GetApprovalStatusOk() (*ClaimApprovalStatusType, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *MembershipClaimSummaryType) SetApprovalStatus(v ClaimApprovalStatusType)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *MembershipClaimSummaryType) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetArrival

`func (o *MembershipClaimSummaryType) GetArrival() string`

GetArrival returns the Arrival field if non-nil, zero value otherwise.

### GetArrivalOk

`func (o *MembershipClaimSummaryType) GetArrivalOk() (*string, bool)`

GetArrivalOk returns a tuple with the Arrival field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrival

`func (o *MembershipClaimSummaryType) SetArrival(v string)`

SetArrival sets Arrival field to given value.

### HasArrival

`func (o *MembershipClaimSummaryType) HasArrival() bool`

HasArrival returns a boolean if a field has been set.

### GetCallerInformation

`func (o *MembershipClaimSummaryType) GetCallerInformation() string`

GetCallerInformation returns the CallerInformation field if non-nil, zero value otherwise.

### GetCallerInformationOk

`func (o *MembershipClaimSummaryType) GetCallerInformationOk() (*string, bool)`

GetCallerInformationOk returns a tuple with the CallerInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallerInformation

`func (o *MembershipClaimSummaryType) SetCallerInformation(v string)`

SetCallerInformation sets CallerInformation field to given value.

### HasCallerInformation

`func (o *MembershipClaimSummaryType) HasCallerInformation() bool`

HasCallerInformation returns a boolean if a field has been set.

### GetCallerName

`func (o *MembershipClaimSummaryType) GetCallerName() string`

GetCallerName returns the CallerName field if non-nil, zero value otherwise.

### GetCallerNameOk

`func (o *MembershipClaimSummaryType) GetCallerNameOk() (*string, bool)`

GetCallerNameOk returns a tuple with the CallerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallerName

`func (o *MembershipClaimSummaryType) SetCallerName(v string)`

SetCallerName sets CallerName field to given value.

### HasCallerName

`func (o *MembershipClaimSummaryType) HasCallerName() bool`

HasCallerName returns a boolean if a field has been set.

### GetClaimDate

`func (o *MembershipClaimSummaryType) GetClaimDate() string`

GetClaimDate returns the ClaimDate field if non-nil, zero value otherwise.

### GetClaimDateOk

`func (o *MembershipClaimSummaryType) GetClaimDateOk() (*string, bool)`

GetClaimDateOk returns a tuple with the ClaimDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimDate

`func (o *MembershipClaimSummaryType) SetClaimDate(v string)`

SetClaimDate sets ClaimDate field to given value.

### HasClaimDate

`func (o *MembershipClaimSummaryType) HasClaimDate() bool`

HasClaimDate returns a boolean if a field has been set.

### GetClaimNo

`func (o *MembershipClaimSummaryType) GetClaimNo() UniqueIDType`

GetClaimNo returns the ClaimNo field if non-nil, zero value otherwise.

### GetClaimNoOk

`func (o *MembershipClaimSummaryType) GetClaimNoOk() (*UniqueIDType, bool)`

GetClaimNoOk returns a tuple with the ClaimNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimNo

`func (o *MembershipClaimSummaryType) SetClaimNo(v UniqueIDType)`

SetClaimNo sets ClaimNo field to given value.

### HasClaimNo

`func (o *MembershipClaimSummaryType) HasClaimNo() bool`

HasClaimNo returns a boolean if a field has been set.

### GetClaimStatus

`func (o *MembershipClaimSummaryType) GetClaimStatus() string`

GetClaimStatus returns the ClaimStatus field if non-nil, zero value otherwise.

### GetClaimStatusOk

`func (o *MembershipClaimSummaryType) GetClaimStatusOk() (*string, bool)`

GetClaimStatusOk returns a tuple with the ClaimStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimStatus

`func (o *MembershipClaimSummaryType) SetClaimStatus(v string)`

SetClaimStatus sets ClaimStatus field to given value.

### HasClaimStatus

`func (o *MembershipClaimSummaryType) HasClaimStatus() bool`

HasClaimStatus returns a boolean if a field has been set.

### GetClaimType

`func (o *MembershipClaimSummaryType) GetClaimType() string`

GetClaimType returns the ClaimType field if non-nil, zero value otherwise.

### GetClaimTypeOk

`func (o *MembershipClaimSummaryType) GetClaimTypeOk() (*string, bool)`

GetClaimTypeOk returns a tuple with the ClaimType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimType

`func (o *MembershipClaimSummaryType) SetClaimType(v string)`

SetClaimType sets ClaimType field to given value.

### HasClaimType

`func (o *MembershipClaimSummaryType) HasClaimType() bool`

HasClaimType returns a boolean if a field has been set.

### GetCloseDate

`func (o *MembershipClaimSummaryType) GetCloseDate() string`

GetCloseDate returns the CloseDate field if non-nil, zero value otherwise.

### GetCloseDateOk

`func (o *MembershipClaimSummaryType) GetCloseDateOk() (*string, bool)`

GetCloseDateOk returns a tuple with the CloseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloseDate

`func (o *MembershipClaimSummaryType) SetCloseDate(v string)`

SetCloseDate sets CloseDate field to given value.

### HasCloseDate

`func (o *MembershipClaimSummaryType) HasCloseDate() bool`

HasCloseDate returns a boolean if a field has been set.

### GetConfirmationNo

`func (o *MembershipClaimSummaryType) GetConfirmationNo() []UniqueIDType`

GetConfirmationNo returns the ConfirmationNo field if non-nil, zero value otherwise.

### GetConfirmationNoOk

`func (o *MembershipClaimSummaryType) GetConfirmationNoOk() (*[]UniqueIDType, bool)`

GetConfirmationNoOk returns a tuple with the ConfirmationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationNo

`func (o *MembershipClaimSummaryType) SetConfirmationNo(v []UniqueIDType)`

SetConfirmationNo sets ConfirmationNo field to given value.

### HasConfirmationNo

`func (o *MembershipClaimSummaryType) HasConfirmationNo() bool`

HasConfirmationNo returns a boolean if a field has been set.

### GetDeparture

`func (o *MembershipClaimSummaryType) GetDeparture() string`

GetDeparture returns the Departure field if non-nil, zero value otherwise.

### GetDepartureOk

`func (o *MembershipClaimSummaryType) GetDepartureOk() (*string, bool)`

GetDepartureOk returns a tuple with the Departure field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeparture

`func (o *MembershipClaimSummaryType) SetDeparture(v string)`

SetDeparture sets Departure field to given value.

### HasDeparture

`func (o *MembershipClaimSummaryType) HasDeparture() bool`

HasDeparture returns a boolean if a field has been set.

### GetHotelId

`func (o *MembershipClaimSummaryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MembershipClaimSummaryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MembershipClaimSummaryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MembershipClaimSummaryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMembershipId

`func (o *MembershipClaimSummaryType) GetMembershipId() string`

GetMembershipId returns the MembershipId field if non-nil, zero value otherwise.

### GetMembershipIdOk

`func (o *MembershipClaimSummaryType) GetMembershipIdOk() (*string, bool)`

GetMembershipIdOk returns a tuple with the MembershipId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipId

`func (o *MembershipClaimSummaryType) SetMembershipId(v string)`

SetMembershipId sets MembershipId field to given value.

### HasMembershipId

`func (o *MembershipClaimSummaryType) HasMembershipId() bool`

HasMembershipId returns a boolean if a field has been set.

### GetMembershipIdNo

`func (o *MembershipClaimSummaryType) GetMembershipIdNo() float32`

GetMembershipIdNo returns the MembershipIdNo field if non-nil, zero value otherwise.

### GetMembershipIdNoOk

`func (o *MembershipClaimSummaryType) GetMembershipIdNoOk() (*float32, bool)`

GetMembershipIdNoOk returns a tuple with the MembershipIdNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipIdNo

`func (o *MembershipClaimSummaryType) SetMembershipIdNo(v float32)`

SetMembershipIdNo sets MembershipIdNo field to given value.

### HasMembershipIdNo

`func (o *MembershipClaimSummaryType) HasMembershipIdNo() bool`

HasMembershipIdNo returns a boolean if a field has been set.

### GetMembershipType

`func (o *MembershipClaimSummaryType) GetMembershipType() string`

GetMembershipType returns the MembershipType field if non-nil, zero value otherwise.

### GetMembershipTypeOk

`func (o *MembershipClaimSummaryType) GetMembershipTypeOk() (*string, bool)`

GetMembershipTypeOk returns a tuple with the MembershipType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipType

`func (o *MembershipClaimSummaryType) SetMembershipType(v string)`

SetMembershipType sets MembershipType field to given value.

### HasMembershipType

`func (o *MembershipClaimSummaryType) HasMembershipType() bool`

HasMembershipType returns a boolean if a field has been set.

### GetOrigin

`func (o *MembershipClaimSummaryType) GetOrigin() string`

GetOrigin returns the Origin field if non-nil, zero value otherwise.

### GetOriginOk

`func (o *MembershipClaimSummaryType) GetOriginOk() (*string, bool)`

GetOriginOk returns a tuple with the Origin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin

`func (o *MembershipClaimSummaryType) SetOrigin(v string)`

SetOrigin sets Origin field to given value.

### HasOrigin

`func (o *MembershipClaimSummaryType) HasOrigin() bool`

HasOrigin returns a boolean if a field has been set.

### GetOwner

`func (o *MembershipClaimSummaryType) GetOwner() string`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *MembershipClaimSummaryType) GetOwnerOk() (*string, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *MembershipClaimSummaryType) SetOwner(v string)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *MembershipClaimSummaryType) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetProfileId

`func (o *MembershipClaimSummaryType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *MembershipClaimSummaryType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *MembershipClaimSummaryType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *MembershipClaimSummaryType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetRecordType

`func (o *MembershipClaimSummaryType) GetRecordType() ClaimRecordType`

GetRecordType returns the RecordType field if non-nil, zero value otherwise.

### GetRecordTypeOk

`func (o *MembershipClaimSummaryType) GetRecordTypeOk() (*ClaimRecordType, bool)`

GetRecordTypeOk returns a tuple with the RecordType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordType

`func (o *MembershipClaimSummaryType) SetRecordType(v ClaimRecordType)`

SetRecordType sets RecordType field to given value.

### HasRecordType

`func (o *MembershipClaimSummaryType) HasRecordType() bool`

HasRecordType returns a boolean if a field has been set.

### GetReplyBy

`func (o *MembershipClaimSummaryType) GetReplyBy() string`

GetReplyBy returns the ReplyBy field if non-nil, zero value otherwise.

### GetReplyByOk

`func (o *MembershipClaimSummaryType) GetReplyByOk() (*string, bool)`

GetReplyByOk returns a tuple with the ReplyBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplyBy

`func (o *MembershipClaimSummaryType) SetReplyBy(v string)`

SetReplyBy sets ReplyBy field to given value.

### HasReplyBy

`func (o *MembershipClaimSummaryType) HasReplyBy() bool`

HasReplyBy returns a boolean if a field has been set.

### GetSource

`func (o *MembershipClaimSummaryType) GetSource() ClaimSourceType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *MembershipClaimSummaryType) GetSourceOk() (*ClaimSourceType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *MembershipClaimSummaryType) SetSource(v ClaimSourceType)`

SetSource sets Source field to given value.

### HasSource

`func (o *MembershipClaimSummaryType) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetSubmitter

`func (o *MembershipClaimSummaryType) GetSubmitter() string`

GetSubmitter returns the Submitter field if non-nil, zero value otherwise.

### GetSubmitterOk

`func (o *MembershipClaimSummaryType) GetSubmitterOk() (*string, bool)`

GetSubmitterOk returns a tuple with the Submitter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubmitter

`func (o *MembershipClaimSummaryType) SetSubmitter(v string)`

SetSubmitter sets Submitter field to given value.

### HasSubmitter

`func (o *MembershipClaimSummaryType) HasSubmitter() bool`

HasSubmitter returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


