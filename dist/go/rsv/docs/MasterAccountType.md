# MasterAccountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Cashiering** | Pointer to [**ResCashieringType**](ResCashieringType.md) |  | [optional] 
**Comments** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | List of Notes for the Guest related to the reservation. | [optional] 
**CustomReference** | Pointer to **string** | Custom Reference to identify reservation. | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**ReservationBlock** | Pointer to [**MasterAccountTypeReservationBlock**](MasterAccountTypeReservationBlock.md) |  | [optional] 
**ReservationGuest** | Pointer to [**ResGuestType**](ResGuestType.md) |  | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ReservationPaymentMethods** | Pointer to [**[]ReservationPaymentMethodType**](ReservationPaymentMethodType.md) | Defines reservation payment methods. | [optional] 
**ReservationProfiles** | Pointer to [**[]ReservationProfileType**](ReservationProfileType.md) | Collection of non-guest profiles associated with the reservation. | [optional] 
**ReservationStatus** | Pointer to [**PMSResStatusType**](PMSResStatusType.md) |  | [optional] 
**RoomRate** | Pointer to [**MasterAccountTypeRoomRate**](MasterAccountTypeRoomRate.md) |  | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 

## Methods

### NewMasterAccountType

`func NewMasterAccountType() *MasterAccountType`

NewMasterAccountType instantiates a new MasterAccountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMasterAccountTypeWithDefaults

`func NewMasterAccountTypeWithDefaults() *MasterAccountType`

NewMasterAccountTypeWithDefaults instantiates a new MasterAccountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCashiering

`func (o *MasterAccountType) GetCashiering() ResCashieringType`

GetCashiering returns the Cashiering field if non-nil, zero value otherwise.

### GetCashieringOk

`func (o *MasterAccountType) GetCashieringOk() (*ResCashieringType, bool)`

GetCashieringOk returns a tuple with the Cashiering field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashiering

`func (o *MasterAccountType) SetCashiering(v ResCashieringType)`

SetCashiering sets Cashiering field to given value.

### HasCashiering

`func (o *MasterAccountType) HasCashiering() bool`

HasCashiering returns a boolean if a field has been set.

### GetComments

`func (o *MasterAccountType) GetComments() []CommentInfoType`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *MasterAccountType) GetCommentsOk() (*[]CommentInfoType, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *MasterAccountType) SetComments(v []CommentInfoType)`

SetComments sets Comments field to given value.

### HasComments

`func (o *MasterAccountType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetCustomReference

`func (o *MasterAccountType) GetCustomReference() string`

GetCustomReference returns the CustomReference field if non-nil, zero value otherwise.

### GetCustomReferenceOk

`func (o *MasterAccountType) GetCustomReferenceOk() (*string, bool)`

GetCustomReferenceOk returns a tuple with the CustomReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomReference

`func (o *MasterAccountType) SetCustomReference(v string)`

SetCustomReference sets CustomReference field to given value.

### HasCustomReference

`func (o *MasterAccountType) HasCustomReference() bool`

HasCustomReference returns a boolean if a field has been set.

### GetHotelId

`func (o *MasterAccountType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MasterAccountType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MasterAccountType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MasterAccountType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationBlock

`func (o *MasterAccountType) GetReservationBlock() MasterAccountTypeReservationBlock`

GetReservationBlock returns the ReservationBlock field if non-nil, zero value otherwise.

### GetReservationBlockOk

`func (o *MasterAccountType) GetReservationBlockOk() (*MasterAccountTypeReservationBlock, bool)`

GetReservationBlockOk returns a tuple with the ReservationBlock field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationBlock

`func (o *MasterAccountType) SetReservationBlock(v MasterAccountTypeReservationBlock)`

SetReservationBlock sets ReservationBlock field to given value.

### HasReservationBlock

`func (o *MasterAccountType) HasReservationBlock() bool`

HasReservationBlock returns a boolean if a field has been set.

### GetReservationGuest

`func (o *MasterAccountType) GetReservationGuest() ResGuestType`

GetReservationGuest returns the ReservationGuest field if non-nil, zero value otherwise.

### GetReservationGuestOk

`func (o *MasterAccountType) GetReservationGuestOk() (*ResGuestType, bool)`

GetReservationGuestOk returns a tuple with the ReservationGuest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationGuest

`func (o *MasterAccountType) SetReservationGuest(v ResGuestType)`

SetReservationGuest sets ReservationGuest field to given value.

### HasReservationGuest

`func (o *MasterAccountType) HasReservationGuest() bool`

HasReservationGuest returns a boolean if a field has been set.

### GetReservationIdList

`func (o *MasterAccountType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *MasterAccountType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *MasterAccountType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *MasterAccountType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetReservationPaymentMethods

`func (o *MasterAccountType) GetReservationPaymentMethods() []ReservationPaymentMethodType`

GetReservationPaymentMethods returns the ReservationPaymentMethods field if non-nil, zero value otherwise.

### GetReservationPaymentMethodsOk

`func (o *MasterAccountType) GetReservationPaymentMethodsOk() (*[]ReservationPaymentMethodType, bool)`

GetReservationPaymentMethodsOk returns a tuple with the ReservationPaymentMethods field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPaymentMethods

`func (o *MasterAccountType) SetReservationPaymentMethods(v []ReservationPaymentMethodType)`

SetReservationPaymentMethods sets ReservationPaymentMethods field to given value.

### HasReservationPaymentMethods

`func (o *MasterAccountType) HasReservationPaymentMethods() bool`

HasReservationPaymentMethods returns a boolean if a field has been set.

### GetReservationProfiles

`func (o *MasterAccountType) GetReservationProfiles() []ReservationProfileType`

GetReservationProfiles returns the ReservationProfiles field if non-nil, zero value otherwise.

### GetReservationProfilesOk

`func (o *MasterAccountType) GetReservationProfilesOk() (*[]ReservationProfileType, bool)`

GetReservationProfilesOk returns a tuple with the ReservationProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationProfiles

`func (o *MasterAccountType) SetReservationProfiles(v []ReservationProfileType)`

SetReservationProfiles sets ReservationProfiles field to given value.

### HasReservationProfiles

`func (o *MasterAccountType) HasReservationProfiles() bool`

HasReservationProfiles returns a boolean if a field has been set.

### GetReservationStatus

`func (o *MasterAccountType) GetReservationStatus() PMSResStatusType`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *MasterAccountType) GetReservationStatusOk() (*PMSResStatusType, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *MasterAccountType) SetReservationStatus(v PMSResStatusType)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *MasterAccountType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetRoomRate

`func (o *MasterAccountType) GetRoomRate() MasterAccountTypeRoomRate`

GetRoomRate returns the RoomRate field if non-nil, zero value otherwise.

### GetRoomRateOk

`func (o *MasterAccountType) GetRoomRateOk() (*MasterAccountTypeRoomRate, bool)`

GetRoomRateOk returns a tuple with the RoomRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomRate

`func (o *MasterAccountType) SetRoomRate(v MasterAccountTypeRoomRate)`

SetRoomRate sets RoomRate field to given value.

### HasRoomRate

`func (o *MasterAccountType) HasRoomRate() bool`

HasRoomRate returns a boolean if a field has been set.

### GetTimeSpan

`func (o *MasterAccountType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *MasterAccountType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *MasterAccountType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *MasterAccountType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *MasterAccountType) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *MasterAccountType) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *MasterAccountType) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *MasterAccountType) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


