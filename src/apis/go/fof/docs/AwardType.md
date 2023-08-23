# AwardType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwardCode** | Pointer to **string** | Award category. | [optional] 
**AwardType** | Pointer to [**AwardKindType**](AwardKindType.md) |  | [optional] 
**Description** | Pointer to **string** | Description of the award/certificate. | [optional] 
**CertificateNo** | Pointer to **string** | Certificate No. | [optional] 
**MasterCertificiateNo** | Pointer to **string** | Master Certificate No. | [optional] 
**MembershipNo** | Pointer to **string** | Membership No. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code for which the routing instructions are provided for a profile. | [optional] 
**HotelCategory** | Pointer to **string** | Indicates the lowest hotel category for which the certificate is valid. | [optional] 
**ExternalHotelCode** | Pointer to **string** | Hotel Code of the CRS application that this certificate belongs to. | [optional] 
**ExternalConfirmationNo** | Pointer to **string** | Confirmation Number given by a CRS application for this reservation. | [optional] 
**CategoryValid** | Pointer to **bool** | Indicates whether the category of certificate is valid or not for this resort. | [optional] 
**ReservationCertificateType** | Pointer to [**ReservationCertificateType**](ReservationCertificateType.md) |  | [optional] 
**RewardCertificateType** | Pointer to [**RewardCertificateType**](RewardCertificateType.md) |  | [optional] 
**Status** | Pointer to [**AwardStatusType**](AwardStatusType.md) |  | [optional] 
**ExpirationDate** | Pointer to **string** | Expiration Date. | [optional] 
**Gift** | Pointer to **bool** | Signifies whether award is gift or not. | [optional] 
**Upgrade** | Pointer to **bool** | Signifies whether upgrade award or not. | [optional] 
**Package** | Pointer to **bool** | Signifies whether upgrade is package or not. | [optional] 
**InstantlyRedeemable** | Pointer to **bool** | Indicates if the award is an Instant Redemption award. | [optional] 
**PaidUpgrade** | Pointer to **bool** | Indicates if this certificate was ordered using the \&quot;Paid Upgrade\&quot; option in the E-Certs screen. | [optional] 
**DetailedCertificate** | Pointer to **bool** | Indicates if this certificate is detailed or not. | [optional] 
**Nights** | Pointer to **int32** | Award Nights. | [optional] 
**SourceType** | Pointer to **string** | MRW : From MRW MAN:Entered manually. | [optional] 
**Points** | Pointer to **float32** | No. of points used to order this award. | [optional] 
**FBAInfo** | Pointer to [**FBAInfoType**](FBAInfoType.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**ProfileId** | Pointer to [**ProfileId**](ProfileId.md) |  | [optional] 
**Quantity** | Pointer to **int32** | Quantity of such awards needed to be ordered. | [optional] 
**DisplaySequence** | Pointer to **float32** | Indicates the order in which the certificates received from MRW. | [optional] 
**CreateDateTime** | Pointer to **time.Time** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **time.Time** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 

## Methods

### NewAwardType

`func NewAwardType() *AwardType`

NewAwardType instantiates a new AwardType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwardTypeWithDefaults

`func NewAwardTypeWithDefaults() *AwardType`

NewAwardTypeWithDefaults instantiates a new AwardType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwardCode

`func (o *AwardType) GetAwardCode() string`

GetAwardCode returns the AwardCode field if non-nil, zero value otherwise.

### GetAwardCodeOk

`func (o *AwardType) GetAwardCodeOk() (*string, bool)`

GetAwardCodeOk returns a tuple with the AwardCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardCode

`func (o *AwardType) SetAwardCode(v string)`

SetAwardCode sets AwardCode field to given value.

### HasAwardCode

`func (o *AwardType) HasAwardCode() bool`

HasAwardCode returns a boolean if a field has been set.

### GetAwardType

`func (o *AwardType) GetAwardType() AwardKindType`

GetAwardType returns the AwardType field if non-nil, zero value otherwise.

### GetAwardTypeOk

`func (o *AwardType) GetAwardTypeOk() (*AwardKindType, bool)`

GetAwardTypeOk returns a tuple with the AwardType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardType

`func (o *AwardType) SetAwardType(v AwardKindType)`

SetAwardType sets AwardType field to given value.

### HasAwardType

`func (o *AwardType) HasAwardType() bool`

HasAwardType returns a boolean if a field has been set.

### GetDescription

`func (o *AwardType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AwardType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AwardType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AwardType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCertificateNo

`func (o *AwardType) GetCertificateNo() string`

GetCertificateNo returns the CertificateNo field if non-nil, zero value otherwise.

### GetCertificateNoOk

`func (o *AwardType) GetCertificateNoOk() (*string, bool)`

GetCertificateNoOk returns a tuple with the CertificateNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateNo

`func (o *AwardType) SetCertificateNo(v string)`

SetCertificateNo sets CertificateNo field to given value.

### HasCertificateNo

`func (o *AwardType) HasCertificateNo() bool`

HasCertificateNo returns a boolean if a field has been set.

### GetMasterCertificiateNo

`func (o *AwardType) GetMasterCertificiateNo() string`

GetMasterCertificiateNo returns the MasterCertificiateNo field if non-nil, zero value otherwise.

### GetMasterCertificiateNoOk

`func (o *AwardType) GetMasterCertificiateNoOk() (*string, bool)`

GetMasterCertificiateNoOk returns a tuple with the MasterCertificiateNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterCertificiateNo

`func (o *AwardType) SetMasterCertificiateNo(v string)`

SetMasterCertificiateNo sets MasterCertificiateNo field to given value.

### HasMasterCertificiateNo

`func (o *AwardType) HasMasterCertificiateNo() bool`

HasMasterCertificiateNo returns a boolean if a field has been set.

### GetMembershipNo

`func (o *AwardType) GetMembershipNo() string`

GetMembershipNo returns the MembershipNo field if non-nil, zero value otherwise.

### GetMembershipNoOk

`func (o *AwardType) GetMembershipNoOk() (*string, bool)`

GetMembershipNoOk returns a tuple with the MembershipNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipNo

`func (o *AwardType) SetMembershipNo(v string)`

SetMembershipNo sets MembershipNo field to given value.

### HasMembershipNo

`func (o *AwardType) HasMembershipNo() bool`

HasMembershipNo returns a boolean if a field has been set.

### GetHotelId

`func (o *AwardType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AwardType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AwardType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AwardType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelCategory

`func (o *AwardType) GetHotelCategory() string`

GetHotelCategory returns the HotelCategory field if non-nil, zero value otherwise.

### GetHotelCategoryOk

`func (o *AwardType) GetHotelCategoryOk() (*string, bool)`

GetHotelCategoryOk returns a tuple with the HotelCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCategory

`func (o *AwardType) SetHotelCategory(v string)`

SetHotelCategory sets HotelCategory field to given value.

### HasHotelCategory

`func (o *AwardType) HasHotelCategory() bool`

HasHotelCategory returns a boolean if a field has been set.

### GetExternalHotelCode

`func (o *AwardType) GetExternalHotelCode() string`

GetExternalHotelCode returns the ExternalHotelCode field if non-nil, zero value otherwise.

### GetExternalHotelCodeOk

`func (o *AwardType) GetExternalHotelCodeOk() (*string, bool)`

GetExternalHotelCodeOk returns a tuple with the ExternalHotelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalHotelCode

`func (o *AwardType) SetExternalHotelCode(v string)`

SetExternalHotelCode sets ExternalHotelCode field to given value.

### HasExternalHotelCode

`func (o *AwardType) HasExternalHotelCode() bool`

HasExternalHotelCode returns a boolean if a field has been set.

### GetExternalConfirmationNo

`func (o *AwardType) GetExternalConfirmationNo() string`

GetExternalConfirmationNo returns the ExternalConfirmationNo field if non-nil, zero value otherwise.

### GetExternalConfirmationNoOk

`func (o *AwardType) GetExternalConfirmationNoOk() (*string, bool)`

GetExternalConfirmationNoOk returns a tuple with the ExternalConfirmationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalConfirmationNo

`func (o *AwardType) SetExternalConfirmationNo(v string)`

SetExternalConfirmationNo sets ExternalConfirmationNo field to given value.

### HasExternalConfirmationNo

`func (o *AwardType) HasExternalConfirmationNo() bool`

HasExternalConfirmationNo returns a boolean if a field has been set.

### GetCategoryValid

`func (o *AwardType) GetCategoryValid() bool`

GetCategoryValid returns the CategoryValid field if non-nil, zero value otherwise.

### GetCategoryValidOk

`func (o *AwardType) GetCategoryValidOk() (*bool, bool)`

GetCategoryValidOk returns a tuple with the CategoryValid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategoryValid

`func (o *AwardType) SetCategoryValid(v bool)`

SetCategoryValid sets CategoryValid field to given value.

### HasCategoryValid

`func (o *AwardType) HasCategoryValid() bool`

HasCategoryValid returns a boolean if a field has been set.

### GetReservationCertificateType

`func (o *AwardType) GetReservationCertificateType() ReservationCertificateType`

GetReservationCertificateType returns the ReservationCertificateType field if non-nil, zero value otherwise.

### GetReservationCertificateTypeOk

`func (o *AwardType) GetReservationCertificateTypeOk() (*ReservationCertificateType, bool)`

GetReservationCertificateTypeOk returns a tuple with the ReservationCertificateType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationCertificateType

`func (o *AwardType) SetReservationCertificateType(v ReservationCertificateType)`

SetReservationCertificateType sets ReservationCertificateType field to given value.

### HasReservationCertificateType

`func (o *AwardType) HasReservationCertificateType() bool`

HasReservationCertificateType returns a boolean if a field has been set.

### GetRewardCertificateType

`func (o *AwardType) GetRewardCertificateType() RewardCertificateType`

GetRewardCertificateType returns the RewardCertificateType field if non-nil, zero value otherwise.

### GetRewardCertificateTypeOk

`func (o *AwardType) GetRewardCertificateTypeOk() (*RewardCertificateType, bool)`

GetRewardCertificateTypeOk returns a tuple with the RewardCertificateType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRewardCertificateType

`func (o *AwardType) SetRewardCertificateType(v RewardCertificateType)`

SetRewardCertificateType sets RewardCertificateType field to given value.

### HasRewardCertificateType

`func (o *AwardType) HasRewardCertificateType() bool`

HasRewardCertificateType returns a boolean if a field has been set.

### GetStatus

`func (o *AwardType) GetStatus() AwardStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AwardType) GetStatusOk() (*AwardStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AwardType) SetStatus(v AwardStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AwardType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetExpirationDate

`func (o *AwardType) GetExpirationDate() string`

GetExpirationDate returns the ExpirationDate field if non-nil, zero value otherwise.

### GetExpirationDateOk

`func (o *AwardType) GetExpirationDateOk() (*string, bool)`

GetExpirationDateOk returns a tuple with the ExpirationDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpirationDate

`func (o *AwardType) SetExpirationDate(v string)`

SetExpirationDate sets ExpirationDate field to given value.

### HasExpirationDate

`func (o *AwardType) HasExpirationDate() bool`

HasExpirationDate returns a boolean if a field has been set.

### GetGift

`func (o *AwardType) GetGift() bool`

GetGift returns the Gift field if non-nil, zero value otherwise.

### GetGiftOk

`func (o *AwardType) GetGiftOk() (*bool, bool)`

GetGiftOk returns a tuple with the Gift field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGift

`func (o *AwardType) SetGift(v bool)`

SetGift sets Gift field to given value.

### HasGift

`func (o *AwardType) HasGift() bool`

HasGift returns a boolean if a field has been set.

### GetUpgrade

`func (o *AwardType) GetUpgrade() bool`

GetUpgrade returns the Upgrade field if non-nil, zero value otherwise.

### GetUpgradeOk

`func (o *AwardType) GetUpgradeOk() (*bool, bool)`

GetUpgradeOk returns a tuple with the Upgrade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgrade

`func (o *AwardType) SetUpgrade(v bool)`

SetUpgrade sets Upgrade field to given value.

### HasUpgrade

`func (o *AwardType) HasUpgrade() bool`

HasUpgrade returns a boolean if a field has been set.

### GetPackage

`func (o *AwardType) GetPackage() bool`

GetPackage returns the Package field if non-nil, zero value otherwise.

### GetPackageOk

`func (o *AwardType) GetPackageOk() (*bool, bool)`

GetPackageOk returns a tuple with the Package field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackage

`func (o *AwardType) SetPackage(v bool)`

SetPackage sets Package field to given value.

### HasPackage

`func (o *AwardType) HasPackage() bool`

HasPackage returns a boolean if a field has been set.

### GetInstantlyRedeemable

`func (o *AwardType) GetInstantlyRedeemable() bool`

GetInstantlyRedeemable returns the InstantlyRedeemable field if non-nil, zero value otherwise.

### GetInstantlyRedeemableOk

`func (o *AwardType) GetInstantlyRedeemableOk() (*bool, bool)`

GetInstantlyRedeemableOk returns a tuple with the InstantlyRedeemable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstantlyRedeemable

`func (o *AwardType) SetInstantlyRedeemable(v bool)`

SetInstantlyRedeemable sets InstantlyRedeemable field to given value.

### HasInstantlyRedeemable

`func (o *AwardType) HasInstantlyRedeemable() bool`

HasInstantlyRedeemable returns a boolean if a field has been set.

### GetPaidUpgrade

`func (o *AwardType) GetPaidUpgrade() bool`

GetPaidUpgrade returns the PaidUpgrade field if non-nil, zero value otherwise.

### GetPaidUpgradeOk

`func (o *AwardType) GetPaidUpgradeOk() (*bool, bool)`

GetPaidUpgradeOk returns a tuple with the PaidUpgrade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaidUpgrade

`func (o *AwardType) SetPaidUpgrade(v bool)`

SetPaidUpgrade sets PaidUpgrade field to given value.

### HasPaidUpgrade

`func (o *AwardType) HasPaidUpgrade() bool`

HasPaidUpgrade returns a boolean if a field has been set.

### GetDetailedCertificate

`func (o *AwardType) GetDetailedCertificate() bool`

GetDetailedCertificate returns the DetailedCertificate field if non-nil, zero value otherwise.

### GetDetailedCertificateOk

`func (o *AwardType) GetDetailedCertificateOk() (*bool, bool)`

GetDetailedCertificateOk returns a tuple with the DetailedCertificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailedCertificate

`func (o *AwardType) SetDetailedCertificate(v bool)`

SetDetailedCertificate sets DetailedCertificate field to given value.

### HasDetailedCertificate

`func (o *AwardType) HasDetailedCertificate() bool`

HasDetailedCertificate returns a boolean if a field has been set.

### GetNights

`func (o *AwardType) GetNights() int32`

GetNights returns the Nights field if non-nil, zero value otherwise.

### GetNightsOk

`func (o *AwardType) GetNightsOk() (*int32, bool)`

GetNightsOk returns a tuple with the Nights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNights

`func (o *AwardType) SetNights(v int32)`

SetNights sets Nights field to given value.

### HasNights

`func (o *AwardType) HasNights() bool`

HasNights returns a boolean if a field has been set.

### GetSourceType

`func (o *AwardType) GetSourceType() string`

GetSourceType returns the SourceType field if non-nil, zero value otherwise.

### GetSourceTypeOk

`func (o *AwardType) GetSourceTypeOk() (*string, bool)`

GetSourceTypeOk returns a tuple with the SourceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceType

`func (o *AwardType) SetSourceType(v string)`

SetSourceType sets SourceType field to given value.

### HasSourceType

`func (o *AwardType) HasSourceType() bool`

HasSourceType returns a boolean if a field has been set.

### GetPoints

`func (o *AwardType) GetPoints() float32`

GetPoints returns the Points field if non-nil, zero value otherwise.

### GetPointsOk

`func (o *AwardType) GetPointsOk() (*float32, bool)`

GetPointsOk returns a tuple with the Points field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoints

`func (o *AwardType) SetPoints(v float32)`

SetPoints sets Points field to given value.

### HasPoints

`func (o *AwardType) HasPoints() bool`

HasPoints returns a boolean if a field has been set.

### GetFBAInfo

`func (o *AwardType) GetFBAInfo() FBAInfoType`

GetFBAInfo returns the FBAInfo field if non-nil, zero value otherwise.

### GetFBAInfoOk

`func (o *AwardType) GetFBAInfoOk() (*FBAInfoType, bool)`

GetFBAInfoOk returns a tuple with the FBAInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFBAInfo

`func (o *AwardType) SetFBAInfo(v FBAInfoType)`

SetFBAInfo sets FBAInfo field to given value.

### HasFBAInfo

`func (o *AwardType) HasFBAInfo() bool`

HasFBAInfo returns a boolean if a field has been set.

### GetReservationId

`func (o *AwardType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *AwardType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *AwardType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *AwardType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetProfileId

`func (o *AwardType) GetProfileId() ProfileId`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *AwardType) GetProfileIdOk() (*ProfileId, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *AwardType) SetProfileId(v ProfileId)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *AwardType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetQuantity

`func (o *AwardType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *AwardType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *AwardType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *AwardType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *AwardType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *AwardType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *AwardType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *AwardType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *AwardType) GetCreateDateTime() time.Time`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *AwardType) GetCreateDateTimeOk() (*time.Time, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *AwardType) SetCreateDateTime(v time.Time)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *AwardType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *AwardType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *AwardType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *AwardType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *AwardType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *AwardType) GetLastModifyDateTime() time.Time`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *AwardType) GetLastModifyDateTimeOk() (*time.Time, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *AwardType) SetLastModifyDateTime(v time.Time)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *AwardType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *AwardType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *AwardType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *AwardType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *AwardType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *AwardType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *AwardType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *AwardType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *AwardType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


