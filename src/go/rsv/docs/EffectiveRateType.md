# EffectiveRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmountBeforeTax** | Pointer to **float32** | Rate amount Before Tax. | [optional] 
**End** | Pointer to **string** | The ending value of the date range. | [optional] 
**ExtraChildRate** | Pointer to **float32** | Rate amount for each extra Child. | [optional] 
**ExtraPersonRate** | Pointer to **float32** | Rate amount for each extra person. | [optional] 
**FivePersonRate** | Pointer to **float32** | Rate amount for five persons. | [optional] 
**FourChildrenRate** | Pointer to **float32** | Rate amount for four Children. | [optional] 
**FourPersonRate** | Pointer to **float32** | Rate amount for four persons. | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**MinimumChildrenForFreeStay** | Pointer to **int32** | Minimum number of children needed to get free stay. | [optional] 
**NumberOfRooms** | Pointer to **int32** |  | [optional] 
**OneChildRate** | Pointer to **float32** | Rate amount for one Child. | [optional] 
**OnePersonRate** | Pointer to **float32** | Rate amount for one person. | [optional] 
**OverrideFloorAmount** | Pointer to **bool** | true if floor amount needs to be override | [optional] 
**PointsRequired** | Pointer to **float32** | The number of award points required for applying this rate plan schedule. | [optional] 
**RateByAgeBuckets** | Pointer to [**RateByAgeBucketsType**](RateByAgeBucketsType.md) |  | [optional] 
**RatePlanCode** | Pointer to **string** |  | [optional] 
**RoomType** | Pointer to **string** |  | [optional] 
**Start** | Pointer to **string** | The starting value of the date range. | [optional] 
**ThreeChildrenRate** | Pointer to **float32** | Rate amount for three Children. | [optional] 
**ThreePersonRate** | Pointer to **float32** | Rate amount for three persons. | [optional] 
**TwoChildrenRate** | Pointer to **float32** | Rate amount for two Children. | [optional] 
**TwoPersonRate** | Pointer to **float32** | Rate amount for two persons. | [optional] 

## Methods

### NewEffectiveRateType

`func NewEffectiveRateType() *EffectiveRateType`

NewEffectiveRateType instantiates a new EffectiveRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEffectiveRateTypeWithDefaults

`func NewEffectiveRateTypeWithDefaults() *EffectiveRateType`

NewEffectiveRateTypeWithDefaults instantiates a new EffectiveRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmountBeforeTax

`func (o *EffectiveRateType) GetAmountBeforeTax() float32`

GetAmountBeforeTax returns the AmountBeforeTax field if non-nil, zero value otherwise.

### GetAmountBeforeTaxOk

`func (o *EffectiveRateType) GetAmountBeforeTaxOk() (*float32, bool)`

GetAmountBeforeTaxOk returns a tuple with the AmountBeforeTax field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmountBeforeTax

`func (o *EffectiveRateType) SetAmountBeforeTax(v float32)`

SetAmountBeforeTax sets AmountBeforeTax field to given value.

### HasAmountBeforeTax

`func (o *EffectiveRateType) HasAmountBeforeTax() bool`

HasAmountBeforeTax returns a boolean if a field has been set.

### GetEnd

`func (o *EffectiveRateType) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *EffectiveRateType) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *EffectiveRateType) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *EffectiveRateType) HasEnd() bool`

HasEnd returns a boolean if a field has been set.

### GetExtraChildRate

`func (o *EffectiveRateType) GetExtraChildRate() float32`

GetExtraChildRate returns the ExtraChildRate field if non-nil, zero value otherwise.

### GetExtraChildRateOk

`func (o *EffectiveRateType) GetExtraChildRateOk() (*float32, bool)`

GetExtraChildRateOk returns a tuple with the ExtraChildRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraChildRate

`func (o *EffectiveRateType) SetExtraChildRate(v float32)`

SetExtraChildRate sets ExtraChildRate field to given value.

### HasExtraChildRate

`func (o *EffectiveRateType) HasExtraChildRate() bool`

HasExtraChildRate returns a boolean if a field has been set.

### GetExtraPersonRate

`func (o *EffectiveRateType) GetExtraPersonRate() float32`

GetExtraPersonRate returns the ExtraPersonRate field if non-nil, zero value otherwise.

### GetExtraPersonRateOk

`func (o *EffectiveRateType) GetExtraPersonRateOk() (*float32, bool)`

GetExtraPersonRateOk returns a tuple with the ExtraPersonRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraPersonRate

`func (o *EffectiveRateType) SetExtraPersonRate(v float32)`

SetExtraPersonRate sets ExtraPersonRate field to given value.

### HasExtraPersonRate

`func (o *EffectiveRateType) HasExtraPersonRate() bool`

HasExtraPersonRate returns a boolean if a field has been set.

### GetFivePersonRate

`func (o *EffectiveRateType) GetFivePersonRate() float32`

GetFivePersonRate returns the FivePersonRate field if non-nil, zero value otherwise.

### GetFivePersonRateOk

`func (o *EffectiveRateType) GetFivePersonRateOk() (*float32, bool)`

GetFivePersonRateOk returns a tuple with the FivePersonRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFivePersonRate

`func (o *EffectiveRateType) SetFivePersonRate(v float32)`

SetFivePersonRate sets FivePersonRate field to given value.

### HasFivePersonRate

`func (o *EffectiveRateType) HasFivePersonRate() bool`

HasFivePersonRate returns a boolean if a field has been set.

### GetFourChildrenRate

`func (o *EffectiveRateType) GetFourChildrenRate() float32`

GetFourChildrenRate returns the FourChildrenRate field if non-nil, zero value otherwise.

### GetFourChildrenRateOk

`func (o *EffectiveRateType) GetFourChildrenRateOk() (*float32, bool)`

GetFourChildrenRateOk returns a tuple with the FourChildrenRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFourChildrenRate

`func (o *EffectiveRateType) SetFourChildrenRate(v float32)`

SetFourChildrenRate sets FourChildrenRate field to given value.

### HasFourChildrenRate

`func (o *EffectiveRateType) HasFourChildrenRate() bool`

HasFourChildrenRate returns a boolean if a field has been set.

### GetFourPersonRate

`func (o *EffectiveRateType) GetFourPersonRate() float32`

GetFourPersonRate returns the FourPersonRate field if non-nil, zero value otherwise.

### GetFourPersonRateOk

`func (o *EffectiveRateType) GetFourPersonRateOk() (*float32, bool)`

GetFourPersonRateOk returns a tuple with the FourPersonRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFourPersonRate

`func (o *EffectiveRateType) SetFourPersonRate(v float32)`

SetFourPersonRate sets FourPersonRate field to given value.

### HasFourPersonRate

`func (o *EffectiveRateType) HasFourPersonRate() bool`

HasFourPersonRate returns a boolean if a field has been set.

### GetHotelId

`func (o *EffectiveRateType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *EffectiveRateType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *EffectiveRateType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *EffectiveRateType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMinimumChildrenForFreeStay

`func (o *EffectiveRateType) GetMinimumChildrenForFreeStay() int32`

GetMinimumChildrenForFreeStay returns the MinimumChildrenForFreeStay field if non-nil, zero value otherwise.

### GetMinimumChildrenForFreeStayOk

`func (o *EffectiveRateType) GetMinimumChildrenForFreeStayOk() (*int32, bool)`

GetMinimumChildrenForFreeStayOk returns a tuple with the MinimumChildrenForFreeStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumChildrenForFreeStay

`func (o *EffectiveRateType) SetMinimumChildrenForFreeStay(v int32)`

SetMinimumChildrenForFreeStay sets MinimumChildrenForFreeStay field to given value.

### HasMinimumChildrenForFreeStay

`func (o *EffectiveRateType) HasMinimumChildrenForFreeStay() bool`

HasMinimumChildrenForFreeStay returns a boolean if a field has been set.

### GetNumberOfRooms

`func (o *EffectiveRateType) GetNumberOfRooms() int32`

GetNumberOfRooms returns the NumberOfRooms field if non-nil, zero value otherwise.

### GetNumberOfRoomsOk

`func (o *EffectiveRateType) GetNumberOfRoomsOk() (*int32, bool)`

GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfRooms

`func (o *EffectiveRateType) SetNumberOfRooms(v int32)`

SetNumberOfRooms sets NumberOfRooms field to given value.

### HasNumberOfRooms

`func (o *EffectiveRateType) HasNumberOfRooms() bool`

HasNumberOfRooms returns a boolean if a field has been set.

### GetOneChildRate

`func (o *EffectiveRateType) GetOneChildRate() float32`

GetOneChildRate returns the OneChildRate field if non-nil, zero value otherwise.

### GetOneChildRateOk

`func (o *EffectiveRateType) GetOneChildRateOk() (*float32, bool)`

GetOneChildRateOk returns a tuple with the OneChildRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOneChildRate

`func (o *EffectiveRateType) SetOneChildRate(v float32)`

SetOneChildRate sets OneChildRate field to given value.

### HasOneChildRate

`func (o *EffectiveRateType) HasOneChildRate() bool`

HasOneChildRate returns a boolean if a field has been set.

### GetOnePersonRate

`func (o *EffectiveRateType) GetOnePersonRate() float32`

GetOnePersonRate returns the OnePersonRate field if non-nil, zero value otherwise.

### GetOnePersonRateOk

`func (o *EffectiveRateType) GetOnePersonRateOk() (*float32, bool)`

GetOnePersonRateOk returns a tuple with the OnePersonRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnePersonRate

`func (o *EffectiveRateType) SetOnePersonRate(v float32)`

SetOnePersonRate sets OnePersonRate field to given value.

### HasOnePersonRate

`func (o *EffectiveRateType) HasOnePersonRate() bool`

HasOnePersonRate returns a boolean if a field has been set.

### GetOverrideFloorAmount

`func (o *EffectiveRateType) GetOverrideFloorAmount() bool`

GetOverrideFloorAmount returns the OverrideFloorAmount field if non-nil, zero value otherwise.

### GetOverrideFloorAmountOk

`func (o *EffectiveRateType) GetOverrideFloorAmountOk() (*bool, bool)`

GetOverrideFloorAmountOk returns a tuple with the OverrideFloorAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideFloorAmount

`func (o *EffectiveRateType) SetOverrideFloorAmount(v bool)`

SetOverrideFloorAmount sets OverrideFloorAmount field to given value.

### HasOverrideFloorAmount

`func (o *EffectiveRateType) HasOverrideFloorAmount() bool`

HasOverrideFloorAmount returns a boolean if a field has been set.

### GetPointsRequired

`func (o *EffectiveRateType) GetPointsRequired() float32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *EffectiveRateType) GetPointsRequiredOk() (*float32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *EffectiveRateType) SetPointsRequired(v float32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *EffectiveRateType) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.

### GetRateByAgeBuckets

`func (o *EffectiveRateType) GetRateByAgeBuckets() RateByAgeBucketsType`

GetRateByAgeBuckets returns the RateByAgeBuckets field if non-nil, zero value otherwise.

### GetRateByAgeBucketsOk

`func (o *EffectiveRateType) GetRateByAgeBucketsOk() (*RateByAgeBucketsType, bool)`

GetRateByAgeBucketsOk returns a tuple with the RateByAgeBuckets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateByAgeBuckets

`func (o *EffectiveRateType) SetRateByAgeBuckets(v RateByAgeBucketsType)`

SetRateByAgeBuckets sets RateByAgeBuckets field to given value.

### HasRateByAgeBuckets

`func (o *EffectiveRateType) HasRateByAgeBuckets() bool`

HasRateByAgeBuckets returns a boolean if a field has been set.

### GetRatePlanCode

`func (o *EffectiveRateType) GetRatePlanCode() string`

GetRatePlanCode returns the RatePlanCode field if non-nil, zero value otherwise.

### GetRatePlanCodeOk

`func (o *EffectiveRateType) GetRatePlanCodeOk() (*string, bool)`

GetRatePlanCodeOk returns a tuple with the RatePlanCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlanCode

`func (o *EffectiveRateType) SetRatePlanCode(v string)`

SetRatePlanCode sets RatePlanCode field to given value.

### HasRatePlanCode

`func (o *EffectiveRateType) HasRatePlanCode() bool`

HasRatePlanCode returns a boolean if a field has been set.

### GetRoomType

`func (o *EffectiveRateType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *EffectiveRateType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *EffectiveRateType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *EffectiveRateType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetStart

`func (o *EffectiveRateType) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *EffectiveRateType) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *EffectiveRateType) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *EffectiveRateType) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetThreeChildrenRate

`func (o *EffectiveRateType) GetThreeChildrenRate() float32`

GetThreeChildrenRate returns the ThreeChildrenRate field if non-nil, zero value otherwise.

### GetThreeChildrenRateOk

`func (o *EffectiveRateType) GetThreeChildrenRateOk() (*float32, bool)`

GetThreeChildrenRateOk returns a tuple with the ThreeChildrenRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreeChildrenRate

`func (o *EffectiveRateType) SetThreeChildrenRate(v float32)`

SetThreeChildrenRate sets ThreeChildrenRate field to given value.

### HasThreeChildrenRate

`func (o *EffectiveRateType) HasThreeChildrenRate() bool`

HasThreeChildrenRate returns a boolean if a field has been set.

### GetThreePersonRate

`func (o *EffectiveRateType) GetThreePersonRate() float32`

GetThreePersonRate returns the ThreePersonRate field if non-nil, zero value otherwise.

### GetThreePersonRateOk

`func (o *EffectiveRateType) GetThreePersonRateOk() (*float32, bool)`

GetThreePersonRateOk returns a tuple with the ThreePersonRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreePersonRate

`func (o *EffectiveRateType) SetThreePersonRate(v float32)`

SetThreePersonRate sets ThreePersonRate field to given value.

### HasThreePersonRate

`func (o *EffectiveRateType) HasThreePersonRate() bool`

HasThreePersonRate returns a boolean if a field has been set.

### GetTwoChildrenRate

`func (o *EffectiveRateType) GetTwoChildrenRate() float32`

GetTwoChildrenRate returns the TwoChildrenRate field if non-nil, zero value otherwise.

### GetTwoChildrenRateOk

`func (o *EffectiveRateType) GetTwoChildrenRateOk() (*float32, bool)`

GetTwoChildrenRateOk returns a tuple with the TwoChildrenRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwoChildrenRate

`func (o *EffectiveRateType) SetTwoChildrenRate(v float32)`

SetTwoChildrenRate sets TwoChildrenRate field to given value.

### HasTwoChildrenRate

`func (o *EffectiveRateType) HasTwoChildrenRate() bool`

HasTwoChildrenRate returns a boolean if a field has been set.

### GetTwoPersonRate

`func (o *EffectiveRateType) GetTwoPersonRate() float32`

GetTwoPersonRate returns the TwoPersonRate field if non-nil, zero value otherwise.

### GetTwoPersonRateOk

`func (o *EffectiveRateType) GetTwoPersonRateOk() (*float32, bool)`

GetTwoPersonRateOk returns a tuple with the TwoPersonRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwoPersonRate

`func (o *EffectiveRateType) SetTwoPersonRate(v float32)`

SetTwoPersonRate sets TwoPersonRate field to given value.

### HasTwoPersonRate

`func (o *EffectiveRateType) HasTwoPersonRate() bool`

HasTwoPersonRate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


