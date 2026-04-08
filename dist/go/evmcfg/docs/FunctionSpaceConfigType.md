# FunctionSpaceConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code where function space belongs to. | [optional] 
**RoomCode** | Pointer to **string** | Room Code of the Function Space. | [optional] 
**RoomType** | Pointer to **string** | Room Type of the Function Space. | [optional] 
**PsuedoRoomType** | Pointer to **bool** | Indicates whether the room type is psuedo. | [optional] 
**SpaceName** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**ShortName** | Pointer to **string** | The Short Name of the Function Space. | [optional] 
**Floor** | Pointer to **string** | The floor on which the Function Space is located. | [optional] 
**SpaceType** | Pointer to **string** | The Type which the Function Space belongs to. | [optional] 
**Location** | Pointer to **string** | The building on which the Function Space is located. | [optional] 
**Combo** | Pointer to **bool** | Indicate if the function space is a combination room. | [optional] 
**Element** | Pointer to **bool** | Indicate if the function space will be shown in the Function Diary by default. | [optional] 
**Shareable** | Pointer to **bool** | Indicate if the function space is shareable. | [optional] 
**ForceAlternate** | Pointer to **bool** | Indicate if the function space is forced to have alternate function spaces in case the function space becomes unvailable. | [optional] 
**WebBookable** | Pointer to **bool** | Indicates whether the Function Space is web bookable or not. | [optional] 
**WebViewable** | Pointer to **bool** | Indicates whether the Function Space is web viewable or not. | [optional] 
**ExcludeFromForecast** | Pointer to **bool** | Flag to indicate if the event of this function space should be excluded from the forecast report. | [optional] 
**FullUtilizationTime** | Pointer to **float32** | The time in minutes that the function space would be considered at 100% utilization. | [optional] 
**HandicapFacilities** | Pointer to **bool** | Indicates whether the function space has handicap facilities. | [optional] 
**OrderBy1** | Pointer to **int32** | The first custom order for sorting the function space display. | [optional] 
**OrderBy2** | Pointer to **int32** | The second custom order for sorting the function space display. | [optional] 
**OrderBy3** | Pointer to **int32** | The third custom order for sorting the function space display. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**Capacity** | Pointer to [**RoomCapacityType**](RoomCapacityType.md) |  | [optional] 
**DisplayInDiary** | Pointer to **bool** | Indicate if the function space will be shown in the Function Diary by default. | [optional] 
**MaxEvents** | Pointer to **int32** | Maximum number of events for a shared function space. | [optional] 
**FutureEventsExist** | Pointer to **bool** | If the function space has future event, the combo elements are not editable. | [optional] 
**SetupStyles** | Pointer to [**[]FunctionSpaceConfigTypeSetupStylesInner**](FunctionSpaceConfigTypeSetupStylesInner.md) | Setup Style Type for function space. | [optional] 
**ComboRooms** | Pointer to [**[]ComboElementRoomType**](ComboElementRoomType.md) | This type holds a collection of combo elements for a function space. | [optional] 
**Rates** | Pointer to [**[]BaseFunctionSpaceRateType**](BaseFunctionSpaceRateType.md) | List of available rates for the function space. | [optional] 
**ComboElements** | Pointer to **[]string** |  | [optional] 
**Dimension** | Pointer to [**FunctionSpaceDimensionType**](FunctionSpaceDimensionType.md) |  | [optional] 
**Alternate** | Pointer to [**FunctionSpaceAlternateType**](FunctionSpaceAlternateType.md) |  | [optional] 

## Methods

### NewFunctionSpaceConfigType

`func NewFunctionSpaceConfigType() *FunctionSpaceConfigType`

NewFunctionSpaceConfigType instantiates a new FunctionSpaceConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceConfigTypeWithDefaults

`func NewFunctionSpaceConfigTypeWithDefaults() *FunctionSpaceConfigType`

NewFunctionSpaceConfigTypeWithDefaults instantiates a new FunctionSpaceConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *FunctionSpaceConfigType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FunctionSpaceConfigType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FunctionSpaceConfigType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FunctionSpaceConfigType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomCode

`func (o *FunctionSpaceConfigType) GetRoomCode() string`

GetRoomCode returns the RoomCode field if non-nil, zero value otherwise.

### GetRoomCodeOk

`func (o *FunctionSpaceConfigType) GetRoomCodeOk() (*string, bool)`

GetRoomCodeOk returns a tuple with the RoomCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCode

`func (o *FunctionSpaceConfigType) SetRoomCode(v string)`

SetRoomCode sets RoomCode field to given value.

### HasRoomCode

`func (o *FunctionSpaceConfigType) HasRoomCode() bool`

HasRoomCode returns a boolean if a field has been set.

### GetRoomType

`func (o *FunctionSpaceConfigType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *FunctionSpaceConfigType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *FunctionSpaceConfigType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *FunctionSpaceConfigType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetPsuedoRoomType

`func (o *FunctionSpaceConfigType) GetPsuedoRoomType() bool`

GetPsuedoRoomType returns the PsuedoRoomType field if non-nil, zero value otherwise.

### GetPsuedoRoomTypeOk

`func (o *FunctionSpaceConfigType) GetPsuedoRoomTypeOk() (*bool, bool)`

GetPsuedoRoomTypeOk returns a tuple with the PsuedoRoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPsuedoRoomType

`func (o *FunctionSpaceConfigType) SetPsuedoRoomType(v bool)`

SetPsuedoRoomType sets PsuedoRoomType field to given value.

### HasPsuedoRoomType

`func (o *FunctionSpaceConfigType) HasPsuedoRoomType() bool`

HasPsuedoRoomType returns a boolean if a field has been set.

### GetSpaceName

`func (o *FunctionSpaceConfigType) GetSpaceName() TranslationTextType2000`

GetSpaceName returns the SpaceName field if non-nil, zero value otherwise.

### GetSpaceNameOk

`func (o *FunctionSpaceConfigType) GetSpaceNameOk() (*TranslationTextType2000, bool)`

GetSpaceNameOk returns a tuple with the SpaceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpaceName

`func (o *FunctionSpaceConfigType) SetSpaceName(v TranslationTextType2000)`

SetSpaceName sets SpaceName field to given value.

### HasSpaceName

`func (o *FunctionSpaceConfigType) HasSpaceName() bool`

HasSpaceName returns a boolean if a field has been set.

### GetShortName

`func (o *FunctionSpaceConfigType) GetShortName() string`

GetShortName returns the ShortName field if non-nil, zero value otherwise.

### GetShortNameOk

`func (o *FunctionSpaceConfigType) GetShortNameOk() (*string, bool)`

GetShortNameOk returns a tuple with the ShortName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortName

`func (o *FunctionSpaceConfigType) SetShortName(v string)`

SetShortName sets ShortName field to given value.

### HasShortName

`func (o *FunctionSpaceConfigType) HasShortName() bool`

HasShortName returns a boolean if a field has been set.

### GetFloor

`func (o *FunctionSpaceConfigType) GetFloor() string`

GetFloor returns the Floor field if non-nil, zero value otherwise.

### GetFloorOk

`func (o *FunctionSpaceConfigType) GetFloorOk() (*string, bool)`

GetFloorOk returns a tuple with the Floor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloor

`func (o *FunctionSpaceConfigType) SetFloor(v string)`

SetFloor sets Floor field to given value.

### HasFloor

`func (o *FunctionSpaceConfigType) HasFloor() bool`

HasFloor returns a boolean if a field has been set.

### GetSpaceType

`func (o *FunctionSpaceConfigType) GetSpaceType() string`

GetSpaceType returns the SpaceType field if non-nil, zero value otherwise.

### GetSpaceTypeOk

`func (o *FunctionSpaceConfigType) GetSpaceTypeOk() (*string, bool)`

GetSpaceTypeOk returns a tuple with the SpaceType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpaceType

`func (o *FunctionSpaceConfigType) SetSpaceType(v string)`

SetSpaceType sets SpaceType field to given value.

### HasSpaceType

`func (o *FunctionSpaceConfigType) HasSpaceType() bool`

HasSpaceType returns a boolean if a field has been set.

### GetLocation

`func (o *FunctionSpaceConfigType) GetLocation() string`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *FunctionSpaceConfigType) GetLocationOk() (*string, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *FunctionSpaceConfigType) SetLocation(v string)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *FunctionSpaceConfigType) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetCombo

`func (o *FunctionSpaceConfigType) GetCombo() bool`

GetCombo returns the Combo field if non-nil, zero value otherwise.

### GetComboOk

`func (o *FunctionSpaceConfigType) GetComboOk() (*bool, bool)`

GetComboOk returns a tuple with the Combo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCombo

`func (o *FunctionSpaceConfigType) SetCombo(v bool)`

SetCombo sets Combo field to given value.

### HasCombo

`func (o *FunctionSpaceConfigType) HasCombo() bool`

HasCombo returns a boolean if a field has been set.

### GetElement

`func (o *FunctionSpaceConfigType) GetElement() bool`

GetElement returns the Element field if non-nil, zero value otherwise.

### GetElementOk

`func (o *FunctionSpaceConfigType) GetElementOk() (*bool, bool)`

GetElementOk returns a tuple with the Element field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElement

`func (o *FunctionSpaceConfigType) SetElement(v bool)`

SetElement sets Element field to given value.

### HasElement

`func (o *FunctionSpaceConfigType) HasElement() bool`

HasElement returns a boolean if a field has been set.

### GetShareable

`func (o *FunctionSpaceConfigType) GetShareable() bool`

GetShareable returns the Shareable field if non-nil, zero value otherwise.

### GetShareableOk

`func (o *FunctionSpaceConfigType) GetShareableOk() (*bool, bool)`

GetShareableOk returns a tuple with the Shareable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareable

`func (o *FunctionSpaceConfigType) SetShareable(v bool)`

SetShareable sets Shareable field to given value.

### HasShareable

`func (o *FunctionSpaceConfigType) HasShareable() bool`

HasShareable returns a boolean if a field has been set.

### GetForceAlternate

`func (o *FunctionSpaceConfigType) GetForceAlternate() bool`

GetForceAlternate returns the ForceAlternate field if non-nil, zero value otherwise.

### GetForceAlternateOk

`func (o *FunctionSpaceConfigType) GetForceAlternateOk() (*bool, bool)`

GetForceAlternateOk returns a tuple with the ForceAlternate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceAlternate

`func (o *FunctionSpaceConfigType) SetForceAlternate(v bool)`

SetForceAlternate sets ForceAlternate field to given value.

### HasForceAlternate

`func (o *FunctionSpaceConfigType) HasForceAlternate() bool`

HasForceAlternate returns a boolean if a field has been set.

### GetWebBookable

`func (o *FunctionSpaceConfigType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *FunctionSpaceConfigType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *FunctionSpaceConfigType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *FunctionSpaceConfigType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.

### GetWebViewable

`func (o *FunctionSpaceConfigType) GetWebViewable() bool`

GetWebViewable returns the WebViewable field if non-nil, zero value otherwise.

### GetWebViewableOk

`func (o *FunctionSpaceConfigType) GetWebViewableOk() (*bool, bool)`

GetWebViewableOk returns a tuple with the WebViewable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebViewable

`func (o *FunctionSpaceConfigType) SetWebViewable(v bool)`

SetWebViewable sets WebViewable field to given value.

### HasWebViewable

`func (o *FunctionSpaceConfigType) HasWebViewable() bool`

HasWebViewable returns a boolean if a field has been set.

### GetExcludeFromForecast

`func (o *FunctionSpaceConfigType) GetExcludeFromForecast() bool`

GetExcludeFromForecast returns the ExcludeFromForecast field if non-nil, zero value otherwise.

### GetExcludeFromForecastOk

`func (o *FunctionSpaceConfigType) GetExcludeFromForecastOk() (*bool, bool)`

GetExcludeFromForecastOk returns a tuple with the ExcludeFromForecast field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeFromForecast

`func (o *FunctionSpaceConfigType) SetExcludeFromForecast(v bool)`

SetExcludeFromForecast sets ExcludeFromForecast field to given value.

### HasExcludeFromForecast

`func (o *FunctionSpaceConfigType) HasExcludeFromForecast() bool`

HasExcludeFromForecast returns a boolean if a field has been set.

### GetFullUtilizationTime

`func (o *FunctionSpaceConfigType) GetFullUtilizationTime() float32`

GetFullUtilizationTime returns the FullUtilizationTime field if non-nil, zero value otherwise.

### GetFullUtilizationTimeOk

`func (o *FunctionSpaceConfigType) GetFullUtilizationTimeOk() (*float32, bool)`

GetFullUtilizationTimeOk returns a tuple with the FullUtilizationTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullUtilizationTime

`func (o *FunctionSpaceConfigType) SetFullUtilizationTime(v float32)`

SetFullUtilizationTime sets FullUtilizationTime field to given value.

### HasFullUtilizationTime

`func (o *FunctionSpaceConfigType) HasFullUtilizationTime() bool`

HasFullUtilizationTime returns a boolean if a field has been set.

### GetHandicapFacilities

`func (o *FunctionSpaceConfigType) GetHandicapFacilities() bool`

GetHandicapFacilities returns the HandicapFacilities field if non-nil, zero value otherwise.

### GetHandicapFacilitiesOk

`func (o *FunctionSpaceConfigType) GetHandicapFacilitiesOk() (*bool, bool)`

GetHandicapFacilitiesOk returns a tuple with the HandicapFacilities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHandicapFacilities

`func (o *FunctionSpaceConfigType) SetHandicapFacilities(v bool)`

SetHandicapFacilities sets HandicapFacilities field to given value.

### HasHandicapFacilities

`func (o *FunctionSpaceConfigType) HasHandicapFacilities() bool`

HasHandicapFacilities returns a boolean if a field has been set.

### GetOrderBy1

`func (o *FunctionSpaceConfigType) GetOrderBy1() int32`

GetOrderBy1 returns the OrderBy1 field if non-nil, zero value otherwise.

### GetOrderBy1Ok

`func (o *FunctionSpaceConfigType) GetOrderBy1Ok() (*int32, bool)`

GetOrderBy1Ok returns a tuple with the OrderBy1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy1

`func (o *FunctionSpaceConfigType) SetOrderBy1(v int32)`

SetOrderBy1 sets OrderBy1 field to given value.

### HasOrderBy1

`func (o *FunctionSpaceConfigType) HasOrderBy1() bool`

HasOrderBy1 returns a boolean if a field has been set.

### GetOrderBy2

`func (o *FunctionSpaceConfigType) GetOrderBy2() int32`

GetOrderBy2 returns the OrderBy2 field if non-nil, zero value otherwise.

### GetOrderBy2Ok

`func (o *FunctionSpaceConfigType) GetOrderBy2Ok() (*int32, bool)`

GetOrderBy2Ok returns a tuple with the OrderBy2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy2

`func (o *FunctionSpaceConfigType) SetOrderBy2(v int32)`

SetOrderBy2 sets OrderBy2 field to given value.

### HasOrderBy2

`func (o *FunctionSpaceConfigType) HasOrderBy2() bool`

HasOrderBy2 returns a boolean if a field has been set.

### GetOrderBy3

`func (o *FunctionSpaceConfigType) GetOrderBy3() int32`

GetOrderBy3 returns the OrderBy3 field if non-nil, zero value otherwise.

### GetOrderBy3Ok

`func (o *FunctionSpaceConfigType) GetOrderBy3Ok() (*int32, bool)`

GetOrderBy3Ok returns a tuple with the OrderBy3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy3

`func (o *FunctionSpaceConfigType) SetOrderBy3(v int32)`

SetOrderBy3 sets OrderBy3 field to given value.

### HasOrderBy3

`func (o *FunctionSpaceConfigType) HasOrderBy3() bool`

HasOrderBy3 returns a boolean if a field has been set.

### GetDescription

`func (o *FunctionSpaceConfigType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FunctionSpaceConfigType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FunctionSpaceConfigType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FunctionSpaceConfigType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCapacity

`func (o *FunctionSpaceConfigType) GetCapacity() RoomCapacityType`

GetCapacity returns the Capacity field if non-nil, zero value otherwise.

### GetCapacityOk

`func (o *FunctionSpaceConfigType) GetCapacityOk() (*RoomCapacityType, bool)`

GetCapacityOk returns a tuple with the Capacity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCapacity

`func (o *FunctionSpaceConfigType) SetCapacity(v RoomCapacityType)`

SetCapacity sets Capacity field to given value.

### HasCapacity

`func (o *FunctionSpaceConfigType) HasCapacity() bool`

HasCapacity returns a boolean if a field has been set.

### GetDisplayInDiary

`func (o *FunctionSpaceConfigType) GetDisplayInDiary() bool`

GetDisplayInDiary returns the DisplayInDiary field if non-nil, zero value otherwise.

### GetDisplayInDiaryOk

`func (o *FunctionSpaceConfigType) GetDisplayInDiaryOk() (*bool, bool)`

GetDisplayInDiaryOk returns a tuple with the DisplayInDiary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayInDiary

`func (o *FunctionSpaceConfigType) SetDisplayInDiary(v bool)`

SetDisplayInDiary sets DisplayInDiary field to given value.

### HasDisplayInDiary

`func (o *FunctionSpaceConfigType) HasDisplayInDiary() bool`

HasDisplayInDiary returns a boolean if a field has been set.

### GetMaxEvents

`func (o *FunctionSpaceConfigType) GetMaxEvents() int32`

GetMaxEvents returns the MaxEvents field if non-nil, zero value otherwise.

### GetMaxEventsOk

`func (o *FunctionSpaceConfigType) GetMaxEventsOk() (*int32, bool)`

GetMaxEventsOk returns a tuple with the MaxEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxEvents

`func (o *FunctionSpaceConfigType) SetMaxEvents(v int32)`

SetMaxEvents sets MaxEvents field to given value.

### HasMaxEvents

`func (o *FunctionSpaceConfigType) HasMaxEvents() bool`

HasMaxEvents returns a boolean if a field has been set.

### GetFutureEventsExist

`func (o *FunctionSpaceConfigType) GetFutureEventsExist() bool`

GetFutureEventsExist returns the FutureEventsExist field if non-nil, zero value otherwise.

### GetFutureEventsExistOk

`func (o *FunctionSpaceConfigType) GetFutureEventsExistOk() (*bool, bool)`

GetFutureEventsExistOk returns a tuple with the FutureEventsExist field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFutureEventsExist

`func (o *FunctionSpaceConfigType) SetFutureEventsExist(v bool)`

SetFutureEventsExist sets FutureEventsExist field to given value.

### HasFutureEventsExist

`func (o *FunctionSpaceConfigType) HasFutureEventsExist() bool`

HasFutureEventsExist returns a boolean if a field has been set.

### GetSetupStyles

`func (o *FunctionSpaceConfigType) GetSetupStyles() []FunctionSpaceConfigTypeSetupStylesInner`

GetSetupStyles returns the SetupStyles field if non-nil, zero value otherwise.

### GetSetupStylesOk

`func (o *FunctionSpaceConfigType) GetSetupStylesOk() (*[]FunctionSpaceConfigTypeSetupStylesInner, bool)`

GetSetupStylesOk returns a tuple with the SetupStyles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupStyles

`func (o *FunctionSpaceConfigType) SetSetupStyles(v []FunctionSpaceConfigTypeSetupStylesInner)`

SetSetupStyles sets SetupStyles field to given value.

### HasSetupStyles

`func (o *FunctionSpaceConfigType) HasSetupStyles() bool`

HasSetupStyles returns a boolean if a field has been set.

### GetComboRooms

`func (o *FunctionSpaceConfigType) GetComboRooms() []ComboElementRoomType`

GetComboRooms returns the ComboRooms field if non-nil, zero value otherwise.

### GetComboRoomsOk

`func (o *FunctionSpaceConfigType) GetComboRoomsOk() (*[]ComboElementRoomType, bool)`

GetComboRoomsOk returns a tuple with the ComboRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComboRooms

`func (o *FunctionSpaceConfigType) SetComboRooms(v []ComboElementRoomType)`

SetComboRooms sets ComboRooms field to given value.

### HasComboRooms

`func (o *FunctionSpaceConfigType) HasComboRooms() bool`

HasComboRooms returns a boolean if a field has been set.

### GetRates

`func (o *FunctionSpaceConfigType) GetRates() []BaseFunctionSpaceRateType`

GetRates returns the Rates field if non-nil, zero value otherwise.

### GetRatesOk

`func (o *FunctionSpaceConfigType) GetRatesOk() (*[]BaseFunctionSpaceRateType, bool)`

GetRatesOk returns a tuple with the Rates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRates

`func (o *FunctionSpaceConfigType) SetRates(v []BaseFunctionSpaceRateType)`

SetRates sets Rates field to given value.

### HasRates

`func (o *FunctionSpaceConfigType) HasRates() bool`

HasRates returns a boolean if a field has been set.

### GetComboElements

`func (o *FunctionSpaceConfigType) GetComboElements() []string`

GetComboElements returns the ComboElements field if non-nil, zero value otherwise.

### GetComboElementsOk

`func (o *FunctionSpaceConfigType) GetComboElementsOk() (*[]string, bool)`

GetComboElementsOk returns a tuple with the ComboElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComboElements

`func (o *FunctionSpaceConfigType) SetComboElements(v []string)`

SetComboElements sets ComboElements field to given value.

### HasComboElements

`func (o *FunctionSpaceConfigType) HasComboElements() bool`

HasComboElements returns a boolean if a field has been set.

### GetDimension

`func (o *FunctionSpaceConfigType) GetDimension() FunctionSpaceDimensionType`

GetDimension returns the Dimension field if non-nil, zero value otherwise.

### GetDimensionOk

`func (o *FunctionSpaceConfigType) GetDimensionOk() (*FunctionSpaceDimensionType, bool)`

GetDimensionOk returns a tuple with the Dimension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDimension

`func (o *FunctionSpaceConfigType) SetDimension(v FunctionSpaceDimensionType)`

SetDimension sets Dimension field to given value.

### HasDimension

`func (o *FunctionSpaceConfigType) HasDimension() bool`

HasDimension returns a boolean if a field has been set.

### GetAlternate

`func (o *FunctionSpaceConfigType) GetAlternate() FunctionSpaceAlternateType`

GetAlternate returns the Alternate field if non-nil, zero value otherwise.

### GetAlternateOk

`func (o *FunctionSpaceConfigType) GetAlternateOk() (*FunctionSpaceAlternateType, bool)`

GetAlternateOk returns a tuple with the Alternate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternate

`func (o *FunctionSpaceConfigType) SetAlternate(v FunctionSpaceAlternateType)`

SetAlternate sets Alternate field to given value.

### HasAlternate

`func (o *FunctionSpaceConfigType) HasAlternate() bool`

HasAlternate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


