# PromotionCodeDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingDate** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Category** | Pointer to **string** | You may enter any information, such as the membership program or level. | [optional] 
**CategoryDesc** | Pointer to **string** | Description of the category. | [optional] 
**CheckInOutTime** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**Description** | Pointer to **string** | Description of the promotion. | [optional] 
**InactiveDate** | Pointer to **string** | Date the promotion is inactived. | [optional] 
**PromoInformation** | Pointer to **string** | Free text comments that further describe the promotion code | [optional] 
**PromoInstructions** | Pointer to **string** | One line of information. If you wish to enter long information, use the Information field. | [optional] 
**PromotionGroup** | Pointer to **string** | Group that the promotion code belongs to. If the promotion group will be associated with a profile promotion, the promotion group is identified as PROFILE. | [optional] 
**PromotionGroupName** | Pointer to **string** | Name of the promotion group. | [optional] 
**PromotionName** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**StayDate** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**UpdateOutsideBookingDate** | Pointer to **bool** | Indicates if reservations are allowed to edit after the booking date has passed. | [optional] 
**UpgradeAllowed** | Pointer to **string** | Available only for reservation promotion codes. Indicates if room upgrades are allowed for the promotion. | [optional] 

## Methods

### NewPromotionCodeDetailsType

`func NewPromotionCodeDetailsType() *PromotionCodeDetailsType`

NewPromotionCodeDetailsType instantiates a new PromotionCodeDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPromotionCodeDetailsTypeWithDefaults

`func NewPromotionCodeDetailsTypeWithDefaults() *PromotionCodeDetailsType`

NewPromotionCodeDetailsTypeWithDefaults instantiates a new PromotionCodeDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBookingDate

`func (o *PromotionCodeDetailsType) GetBookingDate() TimeSpanType`

GetBookingDate returns the BookingDate field if non-nil, zero value otherwise.

### GetBookingDateOk

`func (o *PromotionCodeDetailsType) GetBookingDateOk() (*TimeSpanType, bool)`

GetBookingDateOk returns a tuple with the BookingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingDate

`func (o *PromotionCodeDetailsType) SetBookingDate(v TimeSpanType)`

SetBookingDate sets BookingDate field to given value.

### HasBookingDate

`func (o *PromotionCodeDetailsType) HasBookingDate() bool`

HasBookingDate returns a boolean if a field has been set.

### GetCategory

`func (o *PromotionCodeDetailsType) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *PromotionCodeDetailsType) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *PromotionCodeDetailsType) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *PromotionCodeDetailsType) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetCategoryDesc

`func (o *PromotionCodeDetailsType) GetCategoryDesc() string`

GetCategoryDesc returns the CategoryDesc field if non-nil, zero value otherwise.

### GetCategoryDescOk

`func (o *PromotionCodeDetailsType) GetCategoryDescOk() (*string, bool)`

GetCategoryDescOk returns a tuple with the CategoryDesc field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategoryDesc

`func (o *PromotionCodeDetailsType) SetCategoryDesc(v string)`

SetCategoryDesc sets CategoryDesc field to given value.

### HasCategoryDesc

`func (o *PromotionCodeDetailsType) HasCategoryDesc() bool`

HasCategoryDesc returns a boolean if a field has been set.

### GetCheckInOutTime

`func (o *PromotionCodeDetailsType) GetCheckInOutTime() DateTimeSpanType`

GetCheckInOutTime returns the CheckInOutTime field if non-nil, zero value otherwise.

### GetCheckInOutTimeOk

`func (o *PromotionCodeDetailsType) GetCheckInOutTimeOk() (*DateTimeSpanType, bool)`

GetCheckInOutTimeOk returns a tuple with the CheckInOutTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckInOutTime

`func (o *PromotionCodeDetailsType) SetCheckInOutTime(v DateTimeSpanType)`

SetCheckInOutTime sets CheckInOutTime field to given value.

### HasCheckInOutTime

`func (o *PromotionCodeDetailsType) HasCheckInOutTime() bool`

HasCheckInOutTime returns a boolean if a field has been set.

### GetDescription

`func (o *PromotionCodeDetailsType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *PromotionCodeDetailsType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *PromotionCodeDetailsType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *PromotionCodeDetailsType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetInactiveDate

`func (o *PromotionCodeDetailsType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *PromotionCodeDetailsType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *PromotionCodeDetailsType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *PromotionCodeDetailsType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetPromoInformation

`func (o *PromotionCodeDetailsType) GetPromoInformation() string`

GetPromoInformation returns the PromoInformation field if non-nil, zero value otherwise.

### GetPromoInformationOk

`func (o *PromotionCodeDetailsType) GetPromoInformationOk() (*string, bool)`

GetPromoInformationOk returns a tuple with the PromoInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromoInformation

`func (o *PromotionCodeDetailsType) SetPromoInformation(v string)`

SetPromoInformation sets PromoInformation field to given value.

### HasPromoInformation

`func (o *PromotionCodeDetailsType) HasPromoInformation() bool`

HasPromoInformation returns a boolean if a field has been set.

### GetPromoInstructions

`func (o *PromotionCodeDetailsType) GetPromoInstructions() string`

GetPromoInstructions returns the PromoInstructions field if non-nil, zero value otherwise.

### GetPromoInstructionsOk

`func (o *PromotionCodeDetailsType) GetPromoInstructionsOk() (*string, bool)`

GetPromoInstructionsOk returns a tuple with the PromoInstructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromoInstructions

`func (o *PromotionCodeDetailsType) SetPromoInstructions(v string)`

SetPromoInstructions sets PromoInstructions field to given value.

### HasPromoInstructions

`func (o *PromotionCodeDetailsType) HasPromoInstructions() bool`

HasPromoInstructions returns a boolean if a field has been set.

### GetPromotionGroup

`func (o *PromotionCodeDetailsType) GetPromotionGroup() string`

GetPromotionGroup returns the PromotionGroup field if non-nil, zero value otherwise.

### GetPromotionGroupOk

`func (o *PromotionCodeDetailsType) GetPromotionGroupOk() (*string, bool)`

GetPromotionGroupOk returns a tuple with the PromotionGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionGroup

`func (o *PromotionCodeDetailsType) SetPromotionGroup(v string)`

SetPromotionGroup sets PromotionGroup field to given value.

### HasPromotionGroup

`func (o *PromotionCodeDetailsType) HasPromotionGroup() bool`

HasPromotionGroup returns a boolean if a field has been set.

### GetPromotionGroupName

`func (o *PromotionCodeDetailsType) GetPromotionGroupName() string`

GetPromotionGroupName returns the PromotionGroupName field if non-nil, zero value otherwise.

### GetPromotionGroupNameOk

`func (o *PromotionCodeDetailsType) GetPromotionGroupNameOk() (*string, bool)`

GetPromotionGroupNameOk returns a tuple with the PromotionGroupName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionGroupName

`func (o *PromotionCodeDetailsType) SetPromotionGroupName(v string)`

SetPromotionGroupName sets PromotionGroupName field to given value.

### HasPromotionGroupName

`func (o *PromotionCodeDetailsType) HasPromotionGroupName() bool`

HasPromotionGroupName returns a boolean if a field has been set.

### GetPromotionName

`func (o *PromotionCodeDetailsType) GetPromotionName() TranslationTextType2000`

GetPromotionName returns the PromotionName field if non-nil, zero value otherwise.

### GetPromotionNameOk

`func (o *PromotionCodeDetailsType) GetPromotionNameOk() (*TranslationTextType2000, bool)`

GetPromotionNameOk returns a tuple with the PromotionName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionName

`func (o *PromotionCodeDetailsType) SetPromotionName(v TranslationTextType2000)`

SetPromotionName sets PromotionName field to given value.

### HasPromotionName

`func (o *PromotionCodeDetailsType) HasPromotionName() bool`

HasPromotionName returns a boolean if a field has been set.

### GetStayDate

`func (o *PromotionCodeDetailsType) GetStayDate() TimeSpanType`

GetStayDate returns the StayDate field if non-nil, zero value otherwise.

### GetStayDateOk

`func (o *PromotionCodeDetailsType) GetStayDateOk() (*TimeSpanType, bool)`

GetStayDateOk returns a tuple with the StayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDate

`func (o *PromotionCodeDetailsType) SetStayDate(v TimeSpanType)`

SetStayDate sets StayDate field to given value.

### HasStayDate

`func (o *PromotionCodeDetailsType) HasStayDate() bool`

HasStayDate returns a boolean if a field has been set.

### GetUpdateOutsideBookingDate

`func (o *PromotionCodeDetailsType) GetUpdateOutsideBookingDate() bool`

GetUpdateOutsideBookingDate returns the UpdateOutsideBookingDate field if non-nil, zero value otherwise.

### GetUpdateOutsideBookingDateOk

`func (o *PromotionCodeDetailsType) GetUpdateOutsideBookingDateOk() (*bool, bool)`

GetUpdateOutsideBookingDateOk returns a tuple with the UpdateOutsideBookingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateOutsideBookingDate

`func (o *PromotionCodeDetailsType) SetUpdateOutsideBookingDate(v bool)`

SetUpdateOutsideBookingDate sets UpdateOutsideBookingDate field to given value.

### HasUpdateOutsideBookingDate

`func (o *PromotionCodeDetailsType) HasUpdateOutsideBookingDate() bool`

HasUpdateOutsideBookingDate returns a boolean if a field has been set.

### GetUpgradeAllowed

`func (o *PromotionCodeDetailsType) GetUpgradeAllowed() string`

GetUpgradeAllowed returns the UpgradeAllowed field if non-nil, zero value otherwise.

### GetUpgradeAllowedOk

`func (o *PromotionCodeDetailsType) GetUpgradeAllowedOk() (*string, bool)`

GetUpgradeAllowedOk returns a tuple with the UpgradeAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradeAllowed

`func (o *PromotionCodeDetailsType) SetUpgradeAllowed(v string)`

SetUpgradeAllowed sets UpgradeAllowed field to given value.

### HasUpgradeAllowed

`func (o *PromotionCodeDetailsType) HasUpgradeAllowed() bool`

HasUpgradeAllowed returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


