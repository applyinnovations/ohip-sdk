# ResGuaranteeSearchType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ArrivalDate** | Pointer to **string** | Arrival Date of the guest. | [optional] 
**BlockId** | Pointer to [**BlockId**](BlockId.md) |  | [optional] 
**FetchInstruction** | Pointer to [**ResGuaranteeFetchInstructionsType**](ResGuaranteeFetchInstructionsType.md) |  | [optional] 
**GuaranteeCode** | Pointer to **string** | Guarantee Code should be supplied only for the code verification purpose, if the supplied code is valid for the rest of the criteria it will return the response with the Guarantee Code information. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code to request Guarantee Codes. | [optional] 
**RatePlanCode** | Pointer to **string** | Rate Plan Code to find associated Guarantee Codes. | [optional] 
**ResAttachedProfiles** | Pointer to [**ResAttachedProfileListType**](ResAttachedProfileListType.md) |  | [optional] 
**ResGuestId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ReservationPackages** | Pointer to [**[]ReservationPackageType**](ReservationPackageType.md) | A Service object represents a non-room product provided to guests. Service products may have associated inventory and charges. | [optional] 
**ResvRateAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**RoomStayDetails** | Pointer to [**RoomStaySearchType**](RoomStaySearchType.md) |  | [optional] 
**RoomType** | Pointer to **string** | Room Type for the reservation | [optional] 

## Methods

### NewResGuaranteeSearchType

`func NewResGuaranteeSearchType() *ResGuaranteeSearchType`

NewResGuaranteeSearchType instantiates a new ResGuaranteeSearchType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResGuaranteeSearchTypeWithDefaults

`func NewResGuaranteeSearchTypeWithDefaults() *ResGuaranteeSearchType`

NewResGuaranteeSearchTypeWithDefaults instantiates a new ResGuaranteeSearchType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArrivalDate

`func (o *ResGuaranteeSearchType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *ResGuaranteeSearchType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *ResGuaranteeSearchType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *ResGuaranteeSearchType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetBlockId

`func (o *ResGuaranteeSearchType) GetBlockId() BlockId`

GetBlockId returns the BlockId field if non-nil, zero value otherwise.

### GetBlockIdOk

`func (o *ResGuaranteeSearchType) GetBlockIdOk() (*BlockId, bool)`

GetBlockIdOk returns a tuple with the BlockId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockId

`func (o *ResGuaranteeSearchType) SetBlockId(v BlockId)`

SetBlockId sets BlockId field to given value.

### HasBlockId

`func (o *ResGuaranteeSearchType) HasBlockId() bool`

HasBlockId returns a boolean if a field has been set.

### GetFetchInstruction

`func (o *ResGuaranteeSearchType) GetFetchInstruction() ResGuaranteeFetchInstructionsType`

GetFetchInstruction returns the FetchInstruction field if non-nil, zero value otherwise.

### GetFetchInstructionOk

`func (o *ResGuaranteeSearchType) GetFetchInstructionOk() (*ResGuaranteeFetchInstructionsType, bool)`

GetFetchInstructionOk returns a tuple with the FetchInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFetchInstruction

`func (o *ResGuaranteeSearchType) SetFetchInstruction(v ResGuaranteeFetchInstructionsType)`

SetFetchInstruction sets FetchInstruction field to given value.

### HasFetchInstruction

`func (o *ResGuaranteeSearchType) HasFetchInstruction() bool`

HasFetchInstruction returns a boolean if a field has been set.

### GetGuaranteeCode

`func (o *ResGuaranteeSearchType) GetGuaranteeCode() string`

GetGuaranteeCode returns the GuaranteeCode field if non-nil, zero value otherwise.

### GetGuaranteeCodeOk

`func (o *ResGuaranteeSearchType) GetGuaranteeCodeOk() (*string, bool)`

GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCode

`func (o *ResGuaranteeSearchType) SetGuaranteeCode(v string)`

SetGuaranteeCode sets GuaranteeCode field to given value.

### HasGuaranteeCode

`func (o *ResGuaranteeSearchType) HasGuaranteeCode() bool`

HasGuaranteeCode returns a boolean if a field has been set.

### GetHotelId

`func (o *ResGuaranteeSearchType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ResGuaranteeSearchType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ResGuaranteeSearchType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ResGuaranteeSearchType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *ResGuaranteeSearchType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *ResGuaranteeSearchType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *ResGuaranteeSearchType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *ResGuaranteeSearchType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetResAttachedProfiles

`func (o *ResGuaranteeSearchType) GetResAttachedProfiles() ResAttachedProfileListType`

GetResAttachedProfiles returns the ResAttachedProfiles field if non-nil, zero value otherwise.

### GetResAttachedProfilesOk

`func (o *ResGuaranteeSearchType) GetResAttachedProfilesOk() (*ResAttachedProfileListType, bool)`

GetResAttachedProfilesOk returns a tuple with the ResAttachedProfiles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResAttachedProfiles

`func (o *ResGuaranteeSearchType) SetResAttachedProfiles(v ResAttachedProfileListType)`

SetResAttachedProfiles sets ResAttachedProfiles field to given value.

### HasResAttachedProfiles

`func (o *ResGuaranteeSearchType) HasResAttachedProfiles() bool`

HasResAttachedProfiles returns a boolean if a field has been set.

### GetResGuestId

`func (o *ResGuaranteeSearchType) GetResGuestId() UniqueIDType`

GetResGuestId returns the ResGuestId field if non-nil, zero value otherwise.

### GetResGuestIdOk

`func (o *ResGuaranteeSearchType) GetResGuestIdOk() (*UniqueIDType, bool)`

GetResGuestIdOk returns a tuple with the ResGuestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResGuestId

`func (o *ResGuaranteeSearchType) SetResGuestId(v UniqueIDType)`

SetResGuestId sets ResGuestId field to given value.

### HasResGuestId

`func (o *ResGuaranteeSearchType) HasResGuestId() bool`

HasResGuestId returns a boolean if a field has been set.

### GetReservationPackages

`func (o *ResGuaranteeSearchType) GetReservationPackages() []ReservationPackageType`

GetReservationPackages returns the ReservationPackages field if non-nil, zero value otherwise.

### GetReservationPackagesOk

`func (o *ResGuaranteeSearchType) GetReservationPackagesOk() (*[]ReservationPackageType, bool)`

GetReservationPackagesOk returns a tuple with the ReservationPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationPackages

`func (o *ResGuaranteeSearchType) SetReservationPackages(v []ReservationPackageType)`

SetReservationPackages sets ReservationPackages field to given value.

### HasReservationPackages

`func (o *ResGuaranteeSearchType) HasReservationPackages() bool`

HasReservationPackages returns a boolean if a field has been set.

### GetResvRateAmount

`func (o *ResGuaranteeSearchType) GetResvRateAmount() CurrencyAmountType`

GetResvRateAmount returns the ResvRateAmount field if non-nil, zero value otherwise.

### GetResvRateAmountOk

`func (o *ResGuaranteeSearchType) GetResvRateAmountOk() (*CurrencyAmountType, bool)`

GetResvRateAmountOk returns a tuple with the ResvRateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvRateAmount

`func (o *ResGuaranteeSearchType) SetResvRateAmount(v CurrencyAmountType)`

SetResvRateAmount sets ResvRateAmount field to given value.

### HasResvRateAmount

`func (o *ResGuaranteeSearchType) HasResvRateAmount() bool`

HasResvRateAmount returns a boolean if a field has been set.

### GetRoomStayDetails

`func (o *ResGuaranteeSearchType) GetRoomStayDetails() RoomStaySearchType`

GetRoomStayDetails returns the RoomStayDetails field if non-nil, zero value otherwise.

### GetRoomStayDetailsOk

`func (o *ResGuaranteeSearchType) GetRoomStayDetailsOk() (*RoomStaySearchType, bool)`

GetRoomStayDetailsOk returns a tuple with the RoomStayDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomStayDetails

`func (o *ResGuaranteeSearchType) SetRoomStayDetails(v RoomStaySearchType)`

SetRoomStayDetails sets RoomStayDetails field to given value.

### HasRoomStayDetails

`func (o *ResGuaranteeSearchType) HasRoomStayDetails() bool`

HasRoomStayDetails returns a boolean if a field has been set.

### GetRoomType

`func (o *ResGuaranteeSearchType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *ResGuaranteeSearchType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *ResGuaranteeSearchType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *ResGuaranteeSearchType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


