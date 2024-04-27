# FunctionSpaceAvailabilityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Available** | Pointer to **bool** | Flag that indicates if the function space can be reserved or not. | [optional] 
**ComboSpace** | Pointer to **bool** | Indicate if the function space is a combination functionSpaceDetails. | [optional] 
**ElementSpace** | Pointer to **bool** | Indicate if the function space will be shown in the Function Diary by default. | [optional] 
**Floor** | Pointer to **string** | The floor on which the Function Space is located. | [optional] 
**ForceAlternate** | Pointer to **bool** | Indicate if the function space is forced to have alternate function spaces in case the function space becomes unvailable. | [optional] 
**FullUtilizationTime** | Pointer to **float32** | The time in minutes that the function space would be considered at 100% utilization. | [optional] 
**HandicapFacilities** | Pointer to **bool** | Indicates whether the function space has handicap facilities. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code where function space belongs to. | [optional] 
**Location** | Pointer to **string** | The building on which the Function Space is located. | [optional] 
**OrderBy1** | Pointer to **int32** | The first custom order for sorting the function space display. | [optional] 
**OrderBy2** | Pointer to **int32** | The second custom order for sorting the function space display. | [optional] 
**OrderBy3** | Pointer to **int32** | The third custom order for sorting the function space display. | [optional] 
**PsuedoRoomType** | Pointer to **bool** | Indicates whether the functionSpaceDetails type is psuedo. | [optional] 
**RoomCode** | Pointer to **string** | Room Code of the Function Space. | [optional] 
**RoomType** | Pointer to **string** | Room Type of the Function Space. | [optional] 
**Shareable** | Pointer to **bool** | Indicate if the function space is shareable. | [optional] 
**ShortName** | Pointer to **string** | The Short Name of the Function Space. | [optional] 
**SpaceName** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**SpaceType** | Pointer to **string** | The Type which the Function Space belongs to. | [optional] 
**SuggestedRateAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**SuggestedRateCode** | Pointer to **string** | Rate Code suggested to be used by function space. | [optional] 
**SuggestedSetupCode** | Pointer to **string** | Setup Code suggested to be used by function space. | [optional] 
**WebBookable** | Pointer to **bool** | Indicates whether the Function Space is web bookable or not. | [optional] 
**WebViewable** | Pointer to **bool** | Indicates whether the Function Space is web viewable or not. | [optional] 

## Methods

### NewFunctionSpaceAvailabilityType

`func NewFunctionSpaceAvailabilityType() *FunctionSpaceAvailabilityType`

NewFunctionSpaceAvailabilityType instantiates a new FunctionSpaceAvailabilityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceAvailabilityTypeWithDefaults

`func NewFunctionSpaceAvailabilityTypeWithDefaults() *FunctionSpaceAvailabilityType`

NewFunctionSpaceAvailabilityTypeWithDefaults instantiates a new FunctionSpaceAvailabilityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailable

`func (o *FunctionSpaceAvailabilityType) GetAvailable() bool`

GetAvailable returns the Available field if non-nil, zero value otherwise.

### GetAvailableOk

`func (o *FunctionSpaceAvailabilityType) GetAvailableOk() (*bool, bool)`

GetAvailableOk returns a tuple with the Available field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailable

`func (o *FunctionSpaceAvailabilityType) SetAvailable(v bool)`

SetAvailable sets Available field to given value.

### HasAvailable

`func (o *FunctionSpaceAvailabilityType) HasAvailable() bool`

HasAvailable returns a boolean if a field has been set.

### GetComboSpace

`func (o *FunctionSpaceAvailabilityType) GetComboSpace() bool`

GetComboSpace returns the ComboSpace field if non-nil, zero value otherwise.

### GetComboSpaceOk

`func (o *FunctionSpaceAvailabilityType) GetComboSpaceOk() (*bool, bool)`

GetComboSpaceOk returns a tuple with the ComboSpace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComboSpace

`func (o *FunctionSpaceAvailabilityType) SetComboSpace(v bool)`

SetComboSpace sets ComboSpace field to given value.

### HasComboSpace

`func (o *FunctionSpaceAvailabilityType) HasComboSpace() bool`

HasComboSpace returns a boolean if a field has been set.

### GetElementSpace

`func (o *FunctionSpaceAvailabilityType) GetElementSpace() bool`

GetElementSpace returns the ElementSpace field if non-nil, zero value otherwise.

### GetElementSpaceOk

`func (o *FunctionSpaceAvailabilityType) GetElementSpaceOk() (*bool, bool)`

GetElementSpaceOk returns a tuple with the ElementSpace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElementSpace

`func (o *FunctionSpaceAvailabilityType) SetElementSpace(v bool)`

SetElementSpace sets ElementSpace field to given value.

### HasElementSpace

`func (o *FunctionSpaceAvailabilityType) HasElementSpace() bool`

HasElementSpace returns a boolean if a field has been set.

### GetFloor

`func (o *FunctionSpaceAvailabilityType) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *FunctionSpaceAvailabilityType) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *FunctionSpaceAvailabilityType) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *FunctionSpaceAvailabilityType) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetForceAlternate

`func (o *FunctionSpaceAvailabilityType) GetForceAlternate() bool`

GetForceAlternate returns the ForceAlternate field if non-nil, zero value otherwise.

### GetForceAlternateOk

`func (o *FunctionSpaceAvailabilityType) GetForceAlternateOk() (*bool, bool)`

GetForceAlternateOk returns a tuple with the ForceAlternate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceAlternate

`func (o *FunctionSpaceAvailabilityType) SetForceAlternate(v bool)`

SetForceAlternate sets ForceAlternate field to given value.

### HasForceAlternate

`func (o *FunctionSpaceAvailabilityType) HasForceAlternate() bool`

HasForceAlternate returns a boolean if a field has been set.

### GetFullUtilizationTime

`func (o *FunctionSpaceAvailabilityType) GetFullUtilizationTime() float32`

GetFullUtilizationTime returns the FullUtilizationTime field if non-nil, zero value otherwise.

### GetFullUtilizationTimeOk

`func (o *FunctionSpaceAvailabilityType) GetFullUtilizationTimeOk() (*float32, bool)`

GetFullUtilizationTimeOk returns a tuple with the FullUtilizationTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullUtilizationTime

`func (o *FunctionSpaceAvailabilityType) SetFullUtilizationTime(v float32)`

SetFullUtilizationTime sets FullUtilizationTime field to given value.

### HasFullUtilizationTime

`func (o *FunctionSpaceAvailabilityType) HasFullUtilizationTime() bool`

HasFullUtilizationTime returns a boolean if a field has been set.

### GetHandicapFacilities

`func (o *FunctionSpaceAvailabilityType) GetHandicapFacilities() bool`

GetHandicapFacilities returns the HandicapFacilities field if non-nil, zero value otherwise.

### GetHandicapFacilitiesOk

`func (o *FunctionSpaceAvailabilityType) GetHandicapFacilitiesOk() (*bool, bool)`

GetHandicapFacilitiesOk returns a tuple with the HandicapFacilities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHandicapFacilities

`func (o *FunctionSpaceAvailabilityType) SetHandicapFacilities(v bool)`

SetHandicapFacilities sets HandicapFacilities field to given value.

### HasHandicapFacilities

`func (o *FunctionSpaceAvailabilityType) HasHandicapFacilities() bool`

HasHandicapFacilities returns a boolean if a field has been set.

### GetHotelId

`func (o *FunctionSpaceAvailabilityType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FunctionSpaceAvailabilityType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FunctionSpaceAvailabilityType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FunctionSpaceAvailabilityType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLocation

`func (o *FunctionSpaceAvailabilityType) GetLocation() string`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *FunctionSpaceAvailabilityType) GetLocationOk() (*string, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *FunctionSpaceAvailabilityType) SetLocation(v string)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *FunctionSpaceAvailabilityType) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetOrderBy1

`func (o *FunctionSpaceAvailabilityType) GetOrderBy1() int32`

GetOrderBy1 returns the OrderBy1 field if non-nil, zero value otherwise.

### GetOrderBy1Ok

`func (o *FunctionSpaceAvailabilityType) GetOrderBy1Ok() (*int32, bool)`

GetOrderBy1Ok returns a tuple with the OrderBy1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy1

`func (o *FunctionSpaceAvailabilityType) SetOrderBy1(v int32)`

SetOrderBy1 sets OrderBy1 field to given value.

### HasOrderBy1

`func (o *FunctionSpaceAvailabilityType) HasOrderBy1() bool`

HasOrderBy1 returns a boolean if a field has been set.

### GetOrderBy2

`func (o *FunctionSpaceAvailabilityType) GetOrderBy2() int32`

GetOrderBy2 returns the OrderBy2 field if non-nil, zero value otherwise.

### GetOrderBy2Ok

`func (o *FunctionSpaceAvailabilityType) GetOrderBy2Ok() (*int32, bool)`

GetOrderBy2Ok returns a tuple with the OrderBy2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy2

`func (o *FunctionSpaceAvailabilityType) SetOrderBy2(v int32)`

SetOrderBy2 sets OrderBy2 field to given value.

### HasOrderBy2

`func (o *FunctionSpaceAvailabilityType) HasOrderBy2() bool`

HasOrderBy2 returns a boolean if a field has been set.

### GetOrderBy3

`func (o *FunctionSpaceAvailabilityType) GetOrderBy3() int32`

GetOrderBy3 returns the OrderBy3 field if non-nil, zero value otherwise.

### GetOrderBy3Ok

`func (o *FunctionSpaceAvailabilityType) GetOrderBy3Ok() (*int32, bool)`

GetOrderBy3Ok returns a tuple with the OrderBy3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy3

`func (o *FunctionSpaceAvailabilityType) SetOrderBy3(v int32)`

SetOrderBy3 sets OrderBy3 field to given value.

### HasOrderBy3

`func (o *FunctionSpaceAvailabilityType) HasOrderBy3() bool`

HasOrderBy3 returns a boolean if a field has been set.

### GetPsuedoRoomType

`func (o *FunctionSpaceAvailabilityType) GetPsuedoRoomType() bool`

GetPsuedoRoomType returns the PsuedoRoomType field if non-nil, zero value otherwise.

### GetPsuedoRoomTypeOk

`func (o *FunctionSpaceAvailabilityType) GetPsuedoRoomTypeOk() (*bool, bool)`

GetPsuedoRoomTypeOk returns a tuple with the PsuedoRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPsuedoRoomType

`func (o *FunctionSpaceAvailabilityType) SetPsuedoRoomType(v bool)`

SetPsuedoRoomType sets PsuedoRoomType field to given value.

### HasPsuedoRoomType

`func (o *FunctionSpaceAvailabilityType) HasPsuedoRoomType() bool`

HasPsuedoRoomType returns a boolean if a field has been set.

### GetRoomCode

`func (o *FunctionSpaceAvailabilityType) GetRoomCode() string`

GetRoomCode returns the RoomCode field if non-nil, zero value otherwise.

### GetRoomCodeOk

`func (o *FunctionSpaceAvailabilityType) GetRoomCodeOk() (*string, bool)`

GetRoomCodeOk returns a tuple with the RoomCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCode

`func (o *FunctionSpaceAvailabilityType) SetRoomCode(v string)`

SetRoomCode sets RoomCode field to given value.

### HasRoomCode

`func (o *FunctionSpaceAvailabilityType) HasRoomCode() bool`

HasRoomCode returns a boolean if a field has been set.

### GetRoomType

`func (o *FunctionSpaceAvailabilityType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *FunctionSpaceAvailabilityType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *FunctionSpaceAvailabilityType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *FunctionSpaceAvailabilityType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetShareable

`func (o *FunctionSpaceAvailabilityType) GetShareable() bool`

GetShareable returns the Shareable field if non-nil, zero value otherwise.

### GetShareableOk

`func (o *FunctionSpaceAvailabilityType) GetShareableOk() (*bool, bool)`

GetShareableOk returns a tuple with the Shareable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareable

`func (o *FunctionSpaceAvailabilityType) SetShareable(v bool)`

SetShareable sets Shareable field to given value.

### HasShareable

`func (o *FunctionSpaceAvailabilityType) HasShareable() bool`

HasShareable returns a boolean if a field has been set.

### GetShortName

`func (o *FunctionSpaceAvailabilityType) GetShortName() string`

GetShortName returns the ShortName field if non-nil, zero value otherwise.

### GetShortNameOk

`func (o *FunctionSpaceAvailabilityType) GetShortNameOk() (*string, bool)`

GetShortNameOk returns a tuple with the ShortName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortName

`func (o *FunctionSpaceAvailabilityType) SetShortName(v string)`

SetShortName sets ShortName field to given value.

### HasShortName

`func (o *FunctionSpaceAvailabilityType) HasShortName() bool`

HasShortName returns a boolean if a field has been set.

### GetSpaceName

`func (o *FunctionSpaceAvailabilityType) GetSpaceName() TranslationTextType2000`

GetSpaceName returns the SpaceName field if non-nil, zero value otherwise.

### GetSpaceNameOk

`func (o *FunctionSpaceAvailabilityType) GetSpaceNameOk() (*TranslationTextType2000, bool)`

GetSpaceNameOk returns a tuple with the SpaceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpaceName

`func (o *FunctionSpaceAvailabilityType) SetSpaceName(v TranslationTextType2000)`

SetSpaceName sets SpaceName field to given value.

### HasSpaceName

`func (o *FunctionSpaceAvailabilityType) HasSpaceName() bool`

HasSpaceName returns a boolean if a field has been set.

### GetSpaceType

`func (o *FunctionSpaceAvailabilityType) GetSpaceType() string`

GetSpaceType returns the SpaceType field if non-nil, zero value otherwise.

### GetSpaceTypeOk

`func (o *FunctionSpaceAvailabilityType) GetSpaceTypeOk() (*string, bool)`

GetSpaceTypeOk returns a tuple with the SpaceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpaceType

`func (o *FunctionSpaceAvailabilityType) SetSpaceType(v string)`

SetSpaceType sets SpaceType field to given value.

### HasSpaceType

`func (o *FunctionSpaceAvailabilityType) HasSpaceType() bool`

HasSpaceType returns a boolean if a field has been set.

### GetSuggestedRateAmount

`func (o *FunctionSpaceAvailabilityType) GetSuggestedRateAmount() CurrencyAmountType`

GetSuggestedRateAmount returns the SuggestedRateAmount field if non-nil, zero value otherwise.

### GetSuggestedRateAmountOk

`func (o *FunctionSpaceAvailabilityType) GetSuggestedRateAmountOk() (*CurrencyAmountType, bool)`

GetSuggestedRateAmountOk returns a tuple with the SuggestedRateAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuggestedRateAmount

`func (o *FunctionSpaceAvailabilityType) SetSuggestedRateAmount(v CurrencyAmountType)`

SetSuggestedRateAmount sets SuggestedRateAmount field to given value.

### HasSuggestedRateAmount

`func (o *FunctionSpaceAvailabilityType) HasSuggestedRateAmount() bool`

HasSuggestedRateAmount returns a boolean if a field has been set.

### GetSuggestedRateCode

`func (o *FunctionSpaceAvailabilityType) GetSuggestedRateCode() string`

GetSuggestedRateCode returns the SuggestedRateCode field if non-nil, zero value otherwise.

### GetSuggestedRateCodeOk

`func (o *FunctionSpaceAvailabilityType) GetSuggestedRateCodeOk() (*string, bool)`

GetSuggestedRateCodeOk returns a tuple with the SuggestedRateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuggestedRateCode

`func (o *FunctionSpaceAvailabilityType) SetSuggestedRateCode(v string)`

SetSuggestedRateCode sets SuggestedRateCode field to given value.

### HasSuggestedRateCode

`func (o *FunctionSpaceAvailabilityType) HasSuggestedRateCode() bool`

HasSuggestedRateCode returns a boolean if a field has been set.

### GetSuggestedSetupCode

`func (o *FunctionSpaceAvailabilityType) GetSuggestedSetupCode() string`

GetSuggestedSetupCode returns the SuggestedSetupCode field if non-nil, zero value otherwise.

### GetSuggestedSetupCodeOk

`func (o *FunctionSpaceAvailabilityType) GetSuggestedSetupCodeOk() (*string, bool)`

GetSuggestedSetupCodeOk returns a tuple with the SuggestedSetupCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuggestedSetupCode

`func (o *FunctionSpaceAvailabilityType) SetSuggestedSetupCode(v string)`

SetSuggestedSetupCode sets SuggestedSetupCode field to given value.

### HasSuggestedSetupCode

`func (o *FunctionSpaceAvailabilityType) HasSuggestedSetupCode() bool`

HasSuggestedSetupCode returns a boolean if a field has been set.

### GetWebBookable

`func (o *FunctionSpaceAvailabilityType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *FunctionSpaceAvailabilityType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *FunctionSpaceAvailabilityType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *FunctionSpaceAvailabilityType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.

### GetWebViewable

`func (o *FunctionSpaceAvailabilityType) GetWebViewable() bool`

GetWebViewable returns the WebViewable field if non-nil, zero value otherwise.

### GetWebViewableOk

`func (o *FunctionSpaceAvailabilityType) GetWebViewableOk() (*bool, bool)`

GetWebViewableOk returns a tuple with the WebViewable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebViewable

`func (o *FunctionSpaceAvailabilityType) SetWebViewable(v bool)`

SetWebViewable sets WebViewable field to given value.

### HasWebViewable

`func (o *FunctionSpaceAvailabilityType) HasWebViewable() bool`

HasWebViewable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


