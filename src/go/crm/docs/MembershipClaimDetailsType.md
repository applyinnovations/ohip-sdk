# MembershipClaimDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityLog** | Pointer to [**ClaimActivityLogListType**](ClaimActivityLogListType.md) |  | [optional] 
**ApprovalStatus** | Pointer to [**ClaimApprovalStatusType**](ClaimApprovalStatusType.md) |  | [optional] 
**CallerInformation** | Pointer to **string** | More information related to call that help to resolve the claim.. | [optional] 
**CallerName** | Pointer to **string** | Name of the person placing the claim. This name may be different from the name on the membership card. | [optional] 
**ClaimDate** | Pointer to **string** | Date the claim was made. | [optional] 
**ClaimNo** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ClaimPoints** | Pointer to [**ClaimAdjustmentPointsType**](ClaimAdjustmentPointsType.md) |  | [optional] 
**ClaimStatus** | Pointer to **string** | Status of the claim.(Open, Closed, Pending Review, Waiting for Manager, etc.) | [optional] 
**ClaimType** | Pointer to **string** | Type of user-definable claim such as New Card, Stay, etc. | [optional] 
**CloseDate** | Pointer to **string** | If the status is closed, the date the claim was closed. | [optional] 
**Comments** | Pointer to **string** | Additional comments or steps taken to resolve the claim.. | [optional] 
**Membership** | Pointer to [**ClaimMembershipType**](ClaimMembershipType.md) |  | [optional] 
**Origin** | Pointer to **string** | Origin of the membership claim. User definable values like Email, Fax, Phone Call, etc. | [optional] 
**Owner** | Pointer to **string** | User who is assigned to handle this claim. | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**RecordType** | Pointer to [**ClaimRecordType**](ClaimRecordType.md) |  | [optional] 
**ReplyBy** | Pointer to **string** | The date, if any, by which a response to the caller was promised. | [optional] 
**Reservation** | Pointer to [**ClaimReservationInfoType**](ClaimReservationInfoType.md) |  | [optional] 
**Source** | Pointer to [**ClaimSourceType**](ClaimSourceType.md) |  | [optional] 
**Submitter** | Pointer to **string** | User who entered this claim. | [optional] 

## Methods

### NewMembershipClaimDetailsType

`func NewMembershipClaimDetailsType() *MembershipClaimDetailsType`

NewMembershipClaimDetailsType instantiates a new MembershipClaimDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipClaimDetailsTypeWithDefaults

`func NewMembershipClaimDetailsTypeWithDefaults() *MembershipClaimDetailsType`

NewMembershipClaimDetailsTypeWithDefaults instantiates a new MembershipClaimDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityLog

`func (o *MembershipClaimDetailsType) GetActivityLog() ClaimActivityLogListType`

GetActivityLog returns the ActivityLog field if non-nil, zero value otherwise.

### GetActivityLogOk

`func (o *MembershipClaimDetailsType) GetActivityLogOk() (*ClaimActivityLogListType, bool)`

GetActivityLogOk returns a tuple with the ActivityLog field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityLog

`func (o *MembershipClaimDetailsType) SetActivityLog(v ClaimActivityLogListType)`

SetActivityLog sets ActivityLog field to given value.

### HasActivityLog

`func (o *MembershipClaimDetailsType) HasActivityLog() bool`

HasActivityLog returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *MembershipClaimDetailsType) GetApprovalStatus() ClaimApprovalStatusType`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *MembershipClaimDetailsType) GetApprovalStatusOk() (*ClaimApprovalStatusType, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *MembershipClaimDetailsType) SetApprovalStatus(v ClaimApprovalStatusType)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *MembershipClaimDetailsType) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetCallerInformation

`func (o *MembershipClaimDetailsType) GetCallerInformation() string`

GetCallerInformation returns the CallerInformation field if non-nil, zero value otherwise.

### GetCallerInformationOk

`func (o *MembershipClaimDetailsType) GetCallerInformationOk() (*string, bool)`

GetCallerInformationOk returns a tuple with the CallerInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallerInformation

`func (o *MembershipClaimDetailsType) SetCallerInformation(v string)`

SetCallerInformation sets CallerInformation field to given value.

### HasCallerInformation

`func (o *MembershipClaimDetailsType) HasCallerInformation() bool`

HasCallerInformation returns a boolean if a field has been set.

### GetCallerName

`func (o *MembershipClaimDetailsType) GetCallerName() string`

GetCallerName returns the CallerName field if non-nil, zero value otherwise.

### GetCallerNameOk

`func (o *MembershipClaimDetailsType) GetCallerNameOk() (*string, bool)`

GetCallerNameOk returns a tuple with the CallerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCallerName

`func (o *MembershipClaimDetailsType) SetCallerName(v string)`

SetCallerName sets CallerName field to given value.

### HasCallerName

`func (o *MembershipClaimDetailsType) HasCallerName() bool`

HasCallerName returns a boolean if a field has been set.

### GetClaimDate

`func (o *MembershipClaimDetailsType) GetClaimDate() string`

GetClaimDate returns the ClaimDate field if non-nil, zero value otherwise.

### GetClaimDateOk

`func (o *MembershipClaimDetailsType) GetClaimDateOk() (*string, bool)`

GetClaimDateOk returns a tuple with the ClaimDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimDate

`func (o *MembershipClaimDetailsType) SetClaimDate(v string)`

SetClaimDate sets ClaimDate field to given value.

### HasClaimDate

`func (o *MembershipClaimDetailsType) HasClaimDate() bool`

HasClaimDate returns a boolean if a field has been set.

### GetClaimNo

`func (o *MembershipClaimDetailsType) GetClaimNo() UniqueIDType`

GetClaimNo returns the ClaimNo field if non-nil, zero value otherwise.

### GetClaimNoOk

`func (o *MembershipClaimDetailsType) GetClaimNoOk() (*UniqueIDType, bool)`

GetClaimNoOk returns a tuple with the ClaimNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimNo

`func (o *MembershipClaimDetailsType) SetClaimNo(v UniqueIDType)`

SetClaimNo sets ClaimNo field to given value.

### HasClaimNo

`func (o *MembershipClaimDetailsType) HasClaimNo() bool`

HasClaimNo returns a boolean if a field has been set.

### GetClaimPoints

`func (o *MembershipClaimDetailsType) GetClaimPoints() ClaimAdjustmentPointsType`

GetClaimPoints returns the ClaimPoints field if non-nil, zero value otherwise.

### GetClaimPointsOk

`func (o *MembershipClaimDetailsType) GetClaimPointsOk() (*ClaimAdjustmentPointsType, bool)`

GetClaimPointsOk returns a tuple with the ClaimPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimPoints

`func (o *MembershipClaimDetailsType) SetClaimPoints(v ClaimAdjustmentPointsType)`

SetClaimPoints sets ClaimPoints field to given value.

### HasClaimPoints

`func (o *MembershipClaimDetailsType) HasClaimPoints() bool`

HasClaimPoints returns a boolean if a field has been set.

### GetClaimStatus

`func (o *MembershipClaimDetailsType) GetClaimStatus() string`

GetClaimStatus returns the ClaimStatus field if non-nil, zero value otherwise.

### GetClaimStatusOk

`func (o *MembershipClaimDetailsType) GetClaimStatusOk() (*string, bool)`

GetClaimStatusOk returns a tuple with the ClaimStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimStatus

`func (o *MembershipClaimDetailsType) SetClaimStatus(v string)`

SetClaimStatus sets ClaimStatus field to given value.

### HasClaimStatus

`func (o *MembershipClaimDetailsType) HasClaimStatus() bool`

HasClaimStatus returns a boolean if a field has been set.

### GetClaimType

`func (o *MembershipClaimDetailsType) GetClaimType() string`

GetClaimType returns the ClaimType field if non-nil, zero value otherwise.

### GetClaimTypeOk

`func (o *MembershipClaimDetailsType) GetClaimTypeOk() (*string, bool)`

GetClaimTypeOk returns a tuple with the ClaimType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClaimType

`func (o *MembershipClaimDetailsType) SetClaimType(v string)`

SetClaimType sets ClaimType field to given value.

### HasClaimType

`func (o *MembershipClaimDetailsType) HasClaimType() bool`

HasClaimType returns a boolean if a field has been set.

### GetCloseDate

`func (o *MembershipClaimDetailsType) GetCloseDate() string`

GetCloseDate returns the CloseDate field if non-nil, zero value otherwise.

### GetCloseDateOk

`func (o *MembershipClaimDetailsType) GetCloseDateOk() (*string, bool)`

GetCloseDateOk returns a tuple with the CloseDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloseDate

`func (o *MembershipClaimDetailsType) SetCloseDate(v string)`

SetCloseDate sets CloseDate field to given value.

### HasCloseDate

`func (o *MembershipClaimDetailsType) HasCloseDate() bool`

HasCloseDate returns a boolean if a field has been set.

### GetComments

`func (o *MembershipClaimDetailsType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *MembershipClaimDetailsType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *MembershipClaimDetailsType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *MembershipClaimDetailsType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetMembership

`func (o *MembershipClaimDetailsType) GetMembership() ClaimMembershipType`

GetMembership returns the Membership field if non-nil, zero value otherwise.

### GetMembershipOk

`func (o *MembershipClaimDetailsType) GetMembershipOk() (*ClaimMembershipType, bool)`

GetMembershipOk returns a tuple with the Membership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembership

`func (o *MembershipClaimDetailsType) SetMembership(v ClaimMembershipType)`

SetMembership sets Membership field to given value.

### HasMembership

`func (o *MembershipClaimDetailsType) HasMembership() bool`

HasMembership returns a boolean if a field has been set.

### GetOrigin

`func (o *MembershipClaimDetailsType) GetOrigin() string`

GetOrigin returns the Origin field if non-nil, zero value otherwise.

### GetOriginOk

`func (o *MembershipClaimDetailsType) GetOriginOk() (*string, bool)`

GetOriginOk returns a tuple with the Origin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin

`func (o *MembershipClaimDetailsType) SetOrigin(v string)`

SetOrigin sets Origin field to given value.

### HasOrigin

`func (o *MembershipClaimDetailsType) HasOrigin() bool`

HasOrigin returns a boolean if a field has been set.

### GetOwner

`func (o *MembershipClaimDetailsType) GetOwner() string`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *MembershipClaimDetailsType) GetOwnerOk() (*string, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *MembershipClaimDetailsType) SetOwner(v string)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *MembershipClaimDetailsType) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetProfileId

`func (o *MembershipClaimDetailsType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *MembershipClaimDetailsType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *MembershipClaimDetailsType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *MembershipClaimDetailsType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetRecordType

`func (o *MembershipClaimDetailsType) GetRecordType() ClaimRecordType`

GetRecordType returns the RecordType field if non-nil, zero value otherwise.

### GetRecordTypeOk

`func (o *MembershipClaimDetailsType) GetRecordTypeOk() (*ClaimRecordType, bool)`

GetRecordTypeOk returns a tuple with the RecordType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecordType

`func (o *MembershipClaimDetailsType) SetRecordType(v ClaimRecordType)`

SetRecordType sets RecordType field to given value.

### HasRecordType

`func (o *MembershipClaimDetailsType) HasRecordType() bool`

HasRecordType returns a boolean if a field has been set.

### GetReplyBy

`func (o *MembershipClaimDetailsType) GetReplyBy() string`

GetReplyBy returns the ReplyBy field if non-nil, zero value otherwise.

### GetReplyByOk

`func (o *MembershipClaimDetailsType) GetReplyByOk() (*string, bool)`

GetReplyByOk returns a tuple with the ReplyBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReplyBy

`func (o *MembershipClaimDetailsType) SetReplyBy(v string)`

SetReplyBy sets ReplyBy field to given value.

### HasReplyBy

`func (o *MembershipClaimDetailsType) HasReplyBy() bool`

HasReplyBy returns a boolean if a field has been set.

### GetReservation

`func (o *MembershipClaimDetailsType) GetReservation() ClaimReservationInfoType`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *MembershipClaimDetailsType) GetReservationOk() (*ClaimReservationInfoType, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *MembershipClaimDetailsType) SetReservation(v ClaimReservationInfoType)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *MembershipClaimDetailsType) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetSource

`func (o *MembershipClaimDetailsType) GetSource() ClaimSourceType`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *MembershipClaimDetailsType) GetSourceOk() (*ClaimSourceType, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *MembershipClaimDetailsType) SetSource(v ClaimSourceType)`

SetSource sets Source field to given value.

### HasSource

`func (o *MembershipClaimDetailsType) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetSubmitter

`func (o *MembershipClaimDetailsType) GetSubmitter() string`

GetSubmitter returns the Submitter field if non-nil, zero value otherwise.

### GetSubmitterOk

`func (o *MembershipClaimDetailsType) GetSubmitterOk() (*string, bool)`

GetSubmitterOk returns a tuple with the Submitter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubmitter

`func (o *MembershipClaimDetailsType) SetSubmitter(v string)`

SetSubmitter sets Submitter field to given value.

### HasSubmitter

`func (o *MembershipClaimDetailsType) HasSubmitter() bool`

HasSubmitter returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


