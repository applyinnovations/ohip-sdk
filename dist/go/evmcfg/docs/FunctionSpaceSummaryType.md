# FunctionSpaceSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Combo** | Pointer to **bool** | Indicate if the function space is a combination room. | [optional] 
**Element** | Pointer to **bool** | Indicate if the function space will be shown in the Function Diary by default. | [optional] 
**Floor** | Pointer to **string** | The floor on which the Function Space is located. | [optional] 
**ForceAlternate** | Pointer to **bool** | Indicate if the function space is forced to have alternate function spaces in case the function space becomes unvailable. | [optional] 
**FullUtilizationTime** | Pointer to **float32** | The time in minutes that the function space would be considered at 100% utilization. | [optional] 
**HandicapFacilities** | Pointer to **bool** | Indicates whether the function space has handicap facilities. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code where function space belongs to. | [optional] 
**Location** | Pointer to **string** | The building on which the Function Space is located. | [optional] 
**OrderBy1** | Pointer to **int32** | The first custom order for sorting the function space display. | [optional] 
**OrderBy2** | Pointer to **int32** | The second custom order for sorting the function space display. | [optional] 
**OrderBy3** | Pointer to **int32** | The third custom order for sorting the function space display. | [optional] 
**PsuedoRoomType** | Pointer to **bool** | Indicates whether the room type is psuedo. | [optional] 
**RoomCode** | Pointer to **string** | Room Code of the Function Space. | [optional] 
**RoomType** | Pointer to **string** | Room Type of the Function Space. | [optional] 
**Shareable** | Pointer to **bool** | Indicate if the function space is shareable. | [optional] 
**ShortName** | Pointer to **string** | The Short Name of the Function Space. | [optional] 
**SpaceName** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**SpaceType** | Pointer to **string** | The Type which the Function Space belongs to. | [optional] 
**WebBookable** | Pointer to **bool** | Indicates whether the Function Space is web bookable or not. | [optional] 
**WebViewable** | Pointer to **bool** | Indicates whether the Function Space is web viewable or not. | [optional] 

## Methods

### NewFunctionSpaceSummaryType

`func NewFunctionSpaceSummaryType() *FunctionSpaceSummaryType`

NewFunctionSpaceSummaryType instantiates a new FunctionSpaceSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceSummaryTypeWithDefaults

`func NewFunctionSpaceSummaryTypeWithDefaults() *FunctionSpaceSummaryType`

NewFunctionSpaceSummaryTypeWithDefaults instantiates a new FunctionSpaceSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCombo

`func (o *FunctionSpaceSummaryType) GetCombo() bool`

GetCombo returns the Combo field if non-nil, zero value otherwise.

### GetComboOk

`func (o *FunctionSpaceSummaryType) GetComboOk() (*bool, bool)`

GetComboOk returns a tuple with the Combo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCombo

`func (o *FunctionSpaceSummaryType) SetCombo(v bool)`

SetCombo sets Combo field to given value.

### HasCombo

`func (o *FunctionSpaceSummaryType) HasCombo() bool`

HasCombo returns a boolean if a field has been set.

### GetElement

`func (o *FunctionSpaceSummaryType) GetElement() bool`

GetElement returns the Element field if non-nil, zero value otherwise.

### GetElementOk

`func (o *FunctionSpaceSummaryType) GetElementOk() (*bool, bool)`

GetElementOk returns a tuple with the Element field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElement

`func (o *FunctionSpaceSummaryType) SetElement(v bool)`

SetElement sets Element field to given value.

### HasElement

`func (o *FunctionSpaceSummaryType) HasElement() bool`

HasElement returns a boolean if a field has been set.

### GetFloor

`func (o *FunctionSpaceSummaryType) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *FunctionSpaceSummaryType) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *FunctionSpaceSummaryType) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *FunctionSpaceSummaryType) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetForceAlternate

`func (o *FunctionSpaceSummaryType) GetForceAlternate() bool`

GetForceAlternate returns the ForceAlternate field if non-nil, zero value otherwise.

### GetForceAlternateOk

`func (o *FunctionSpaceSummaryType) GetForceAlternateOk() (*bool, bool)`

GetForceAlternateOk returns a tuple with the ForceAlternate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceAlternate

`func (o *FunctionSpaceSummaryType) SetForceAlternate(v bool)`

SetForceAlternate sets ForceAlternate field to given value.

### HasForceAlternate

`func (o *FunctionSpaceSummaryType) HasForceAlternate() bool`

HasForceAlternate returns a boolean if a field has been set.

### GetFullUtilizationTime

`func (o *FunctionSpaceSummaryType) GetFullUtilizationTime() float32`

GetFullUtilizationTime returns the FullUtilizationTime field if non-nil, zero value otherwise.

### GetFullUtilizationTimeOk

`func (o *FunctionSpaceSummaryType) GetFullUtilizationTimeOk() (*float32, bool)`

GetFullUtilizationTimeOk returns a tuple with the FullUtilizationTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullUtilizationTime

`func (o *FunctionSpaceSummaryType) SetFullUtilizationTime(v float32)`

SetFullUtilizationTime sets FullUtilizationTime field to given value.

### HasFullUtilizationTime

`func (o *FunctionSpaceSummaryType) HasFullUtilizationTime() bool`

HasFullUtilizationTime returns a boolean if a field has been set.

### GetHandicapFacilities

`func (o *FunctionSpaceSummaryType) GetHandicapFacilities() bool`

GetHandicapFacilities returns the HandicapFacilities field if non-nil, zero value otherwise.

### GetHandicapFacilitiesOk

`func (o *FunctionSpaceSummaryType) GetHandicapFacilitiesOk() (*bool, bool)`

GetHandicapFacilitiesOk returns a tuple with the HandicapFacilities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHandicapFacilities

`func (o *FunctionSpaceSummaryType) SetHandicapFacilities(v bool)`

SetHandicapFacilities sets HandicapFacilities field to given value.

### HasHandicapFacilities

`func (o *FunctionSpaceSummaryType) HasHandicapFacilities() bool`

HasHandicapFacilities returns a boolean if a field has been set.

### GetHotelId

`func (o *FunctionSpaceSummaryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FunctionSpaceSummaryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FunctionSpaceSummaryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FunctionSpaceSummaryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLocation

`func (o *FunctionSpaceSummaryType) GetLocation() string`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *FunctionSpaceSummaryType) GetLocationOk() (*string, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *FunctionSpaceSummaryType) SetLocation(v string)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *FunctionSpaceSummaryType) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetOrderBy1

`func (o *FunctionSpaceSummaryType) GetOrderBy1() int32`

GetOrderBy1 returns the OrderBy1 field if non-nil, zero value otherwise.

### GetOrderBy1Ok

`func (o *FunctionSpaceSummaryType) GetOrderBy1Ok() (*int32, bool)`

GetOrderBy1Ok returns a tuple with the OrderBy1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy1

`func (o *FunctionSpaceSummaryType) SetOrderBy1(v int32)`

SetOrderBy1 sets OrderBy1 field to given value.

### HasOrderBy1

`func (o *FunctionSpaceSummaryType) HasOrderBy1() bool`

HasOrderBy1 returns a boolean if a field has been set.

### GetOrderBy2

`func (o *FunctionSpaceSummaryType) GetOrderBy2() int32`

GetOrderBy2 returns the OrderBy2 field if non-nil, zero value otherwise.

### GetOrderBy2Ok

`func (o *FunctionSpaceSummaryType) GetOrderBy2Ok() (*int32, bool)`

GetOrderBy2Ok returns a tuple with the OrderBy2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy2

`func (o *FunctionSpaceSummaryType) SetOrderBy2(v int32)`

SetOrderBy2 sets OrderBy2 field to given value.

### HasOrderBy2

`func (o *FunctionSpaceSummaryType) HasOrderBy2() bool`

HasOrderBy2 returns a boolean if a field has been set.

### GetOrderBy3

`func (o *FunctionSpaceSummaryType) GetOrderBy3() int32`

GetOrderBy3 returns the OrderBy3 field if non-nil, zero value otherwise.

### GetOrderBy3Ok

`func (o *FunctionSpaceSummaryType) GetOrderBy3Ok() (*int32, bool)`

GetOrderBy3Ok returns a tuple with the OrderBy3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy3

`func (o *FunctionSpaceSummaryType) SetOrderBy3(v int32)`

SetOrderBy3 sets OrderBy3 field to given value.

### HasOrderBy3

`func (o *FunctionSpaceSummaryType) HasOrderBy3() bool`

HasOrderBy3 returns a boolean if a field has been set.

### GetPsuedoRoomType

`func (o *FunctionSpaceSummaryType) GetPsuedoRoomType() bool`

GetPsuedoRoomType returns the PsuedoRoomType field if non-nil, zero value otherwise.

### GetPsuedoRoomTypeOk

`func (o *FunctionSpaceSummaryType) GetPsuedoRoomTypeOk() (*bool, bool)`

GetPsuedoRoomTypeOk returns a tuple with the PsuedoRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPsuedoRoomType

`func (o *FunctionSpaceSummaryType) SetPsuedoRoomType(v bool)`

SetPsuedoRoomType sets PsuedoRoomType field to given value.

### HasPsuedoRoomType

`func (o *FunctionSpaceSummaryType) HasPsuedoRoomType() bool`

HasPsuedoRoomType returns a boolean if a field has been set.

### GetRoomCode

`func (o *FunctionSpaceSummaryType) GetRoomCode() string`

GetRoomCode returns the RoomCode field if non-nil, zero value otherwise.

### GetRoomCodeOk

`func (o *FunctionSpaceSummaryType) GetRoomCodeOk() (*string, bool)`

GetRoomCodeOk returns a tuple with the RoomCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCode

`func (o *FunctionSpaceSummaryType) SetRoomCode(v string)`

SetRoomCode sets RoomCode field to given value.

### HasRoomCode

`func (o *FunctionSpaceSummaryType) HasRoomCode() bool`

HasRoomCode returns a boolean if a field has been set.

### GetRoomType

`func (o *FunctionSpaceSummaryType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *FunctionSpaceSummaryType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *FunctionSpaceSummaryType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *FunctionSpaceSummaryType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetShareable

`func (o *FunctionSpaceSummaryType) GetShareable() bool`

GetShareable returns the Shareable field if non-nil, zero value otherwise.

### GetShareableOk

`func (o *FunctionSpaceSummaryType) GetShareableOk() (*bool, bool)`

GetShareableOk returns a tuple with the Shareable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareable

`func (o *FunctionSpaceSummaryType) SetShareable(v bool)`

SetShareable sets Shareable field to given value.

### HasShareable

`func (o *FunctionSpaceSummaryType) HasShareable() bool`

HasShareable returns a boolean if a field has been set.

### GetShortName

`func (o *FunctionSpaceSummaryType) GetShortName() string`

GetShortName returns the ShortName field if non-nil, zero value otherwise.

### GetShortNameOk

`func (o *FunctionSpaceSummaryType) GetShortNameOk() (*string, bool)`

GetShortNameOk returns a tuple with the ShortName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortName

`func (o *FunctionSpaceSummaryType) SetShortName(v string)`

SetShortName sets ShortName field to given value.

### HasShortName

`func (o *FunctionSpaceSummaryType) HasShortName() bool`

HasShortName returns a boolean if a field has been set.

### GetSpaceName

`func (o *FunctionSpaceSummaryType) GetSpaceName() TranslationTextType2000`

GetSpaceName returns the SpaceName field if non-nil, zero value otherwise.

### GetSpaceNameOk

`func (o *FunctionSpaceSummaryType) GetSpaceNameOk() (*TranslationTextType2000, bool)`

GetSpaceNameOk returns a tuple with the SpaceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpaceName

`func (o *FunctionSpaceSummaryType) SetSpaceName(v TranslationTextType2000)`

SetSpaceName sets SpaceName field to given value.

### HasSpaceName

`func (o *FunctionSpaceSummaryType) HasSpaceName() bool`

HasSpaceName returns a boolean if a field has been set.

### GetSpaceType

`func (o *FunctionSpaceSummaryType) GetSpaceType() string`

GetSpaceType returns the SpaceType field if non-nil, zero value otherwise.

### GetSpaceTypeOk

`func (o *FunctionSpaceSummaryType) GetSpaceTypeOk() (*string, bool)`

GetSpaceTypeOk returns a tuple with the SpaceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpaceType

`func (o *FunctionSpaceSummaryType) SetSpaceType(v string)`

SetSpaceType sets SpaceType field to given value.

### HasSpaceType

`func (o *FunctionSpaceSummaryType) HasSpaceType() bool`

HasSpaceType returns a boolean if a field has been set.

### GetWebBookable

`func (o *FunctionSpaceSummaryType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *FunctionSpaceSummaryType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *FunctionSpaceSummaryType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *FunctionSpaceSummaryType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.

### GetWebViewable

`func (o *FunctionSpaceSummaryType) GetWebViewable() bool`

GetWebViewable returns the WebViewable field if non-nil, zero value otherwise.

### GetWebViewableOk

`func (o *FunctionSpaceSummaryType) GetWebViewableOk() (*bool, bool)`

GetWebViewableOk returns a tuple with the WebViewable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebViewable

`func (o *FunctionSpaceSummaryType) SetWebViewable(v bool)`

SetWebViewable sets WebViewable field to given value.

### HasWebViewable

`func (o *FunctionSpaceSummaryType) HasWebViewable() bool`

HasWebViewable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


