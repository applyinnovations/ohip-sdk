# HotelInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryDetails** | Pointer to [**HotelInfoTypePrimaryDetails**](HotelInfoTypePrimaryDetails.md) |  | [optional] 
**GeneralInformation** | Pointer to [**HotelInfoTypeGeneralInformation**](HotelInfoTypeGeneralInformation.md) |  | [optional] 
**AccommodationDetails** | Pointer to [**HotelInfoTypeAccommodationDetails**](HotelInfoTypeAccommodationDetails.md) |  | [optional] 
**PropertyControls** | Pointer to [**HotelInfoTypePropertyControls**](HotelInfoTypePropertyControls.md) |  | [optional] 
**Communication** | Pointer to [**HotelInfoTypeCommunication**](HotelInfoTypeCommunication.md) |  | [optional] 
**Address** | Pointer to [**HotelInfoTypeAddress**](HotelInfoTypeAddress.md) |  | [optional] 
**HotelRestaurants** | Pointer to [**[]HotelRestaurantType**](HotelRestaurantType.md) |  | [optional] 
**HotelRateRanges** | Pointer to [**[]HotelRateRangeType**](HotelRateRangeType.md) | Lists of rate ranges of the hotel. | [optional] 
**AlternateHotels** | Pointer to [**[]AlternateHotelType**](AlternateHotelType.md) |  | [optional] 
**HotelContacts** | Pointer to [**[]HotelContactType**](HotelContactType.md) | Lists of contacts of the hotel. | [optional] 
**HotelEventSpaces** | Pointer to [**HotelEventSpacesType**](HotelEventSpacesType.md) |  | [optional] 
**HotelNotes** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | List of Notes of the hotel. | [optional] 
**HotelCorporateInformations** | Pointer to [**HotelCorporateInformationsType**](HotelCorporateInformationsType.md) |  | [optional] 
**Attractions** | Pointer to [**[]HotelAttractionType**](HotelAttractionType.md) |  | [optional] 
**MeetingRooms** | Pointer to [**[]MeetingRoomType**](MeetingRoomType.md) | List of meeting rooms of the hotel. | [optional] 
**ChainCode** | Pointer to **string** | The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute. | [optional] 
**HotelId** | Pointer to **string** | The code that uniquely identifies a single hotel property. The hotel code is decided between vendors. | [optional] 
**HotelCityCode** | Pointer to **string** | The IATA city code; for example DCA, ORD. | [optional] 
**HotelName** | Pointer to **string** | A text field used to communicate the proper name of the hotel. | [optional] 
**HotelCodeContext** | Pointer to **string** | A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes. | [optional] 
**ChainName** | Pointer to **string** | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). | [optional] 

## Methods

### NewHotelInfoType

`func NewHotelInfoType() *HotelInfoType`

NewHotelInfoType instantiates a new HotelInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelInfoTypeWithDefaults

`func NewHotelInfoTypeWithDefaults() *HotelInfoType`

NewHotelInfoTypeWithDefaults instantiates a new HotelInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimaryDetails

`func (o *HotelInfoType) GetPrimaryDetails() HotelInfoTypePrimaryDetails`

GetPrimaryDetails returns the PrimaryDetails field if non-nil, zero value otherwise.

### GetPrimaryDetailsOk

`func (o *HotelInfoType) GetPrimaryDetailsOk() (*HotelInfoTypePrimaryDetails, bool)`

GetPrimaryDetailsOk returns a tuple with the PrimaryDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryDetails

`func (o *HotelInfoType) SetPrimaryDetails(v HotelInfoTypePrimaryDetails)`

SetPrimaryDetails sets PrimaryDetails field to given value.

### HasPrimaryDetails

`func (o *HotelInfoType) HasPrimaryDetails() bool`

HasPrimaryDetails returns a boolean if a field has been set.

### GetGeneralInformation

`func (o *HotelInfoType) GetGeneralInformation() HotelInfoTypeGeneralInformation`

GetGeneralInformation returns the GeneralInformation field if non-nil, zero value otherwise.

### GetGeneralInformationOk

`func (o *HotelInfoType) GetGeneralInformationOk() (*HotelInfoTypeGeneralInformation, bool)`

GetGeneralInformationOk returns a tuple with the GeneralInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneralInformation

`func (o *HotelInfoType) SetGeneralInformation(v HotelInfoTypeGeneralInformation)`

SetGeneralInformation sets GeneralInformation field to given value.

### HasGeneralInformation

`func (o *HotelInfoType) HasGeneralInformation() bool`

HasGeneralInformation returns a boolean if a field has been set.

### GetAccommodationDetails

`func (o *HotelInfoType) GetAccommodationDetails() HotelInfoTypeAccommodationDetails`

GetAccommodationDetails returns the AccommodationDetails field if non-nil, zero value otherwise.

### GetAccommodationDetailsOk

`func (o *HotelInfoType) GetAccommodationDetailsOk() (*HotelInfoTypeAccommodationDetails, bool)`

GetAccommodationDetailsOk returns a tuple with the AccommodationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccommodationDetails

`func (o *HotelInfoType) SetAccommodationDetails(v HotelInfoTypeAccommodationDetails)`

SetAccommodationDetails sets AccommodationDetails field to given value.

### HasAccommodationDetails

`func (o *HotelInfoType) HasAccommodationDetails() bool`

HasAccommodationDetails returns a boolean if a field has been set.

### GetPropertyControls

`func (o *HotelInfoType) GetPropertyControls() HotelInfoTypePropertyControls`

GetPropertyControls returns the PropertyControls field if non-nil, zero value otherwise.

### GetPropertyControlsOk

`func (o *HotelInfoType) GetPropertyControlsOk() (*HotelInfoTypePropertyControls, bool)`

GetPropertyControlsOk returns a tuple with the PropertyControls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyControls

`func (o *HotelInfoType) SetPropertyControls(v HotelInfoTypePropertyControls)`

SetPropertyControls sets PropertyControls field to given value.

### HasPropertyControls

`func (o *HotelInfoType) HasPropertyControls() bool`

HasPropertyControls returns a boolean if a field has been set.

### GetCommunication

`func (o *HotelInfoType) GetCommunication() HotelInfoTypeCommunication`

GetCommunication returns the Communication field if non-nil, zero value otherwise.

### GetCommunicationOk

`func (o *HotelInfoType) GetCommunicationOk() (*HotelInfoTypeCommunication, bool)`

GetCommunicationOk returns a tuple with the Communication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunication

`func (o *HotelInfoType) SetCommunication(v HotelInfoTypeCommunication)`

SetCommunication sets Communication field to given value.

### HasCommunication

`func (o *HotelInfoType) HasCommunication() bool`

HasCommunication returns a boolean if a field has been set.

### GetAddress

`func (o *HotelInfoType) GetAddress() HotelInfoTypeAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *HotelInfoType) GetAddressOk() (*HotelInfoTypeAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *HotelInfoType) SetAddress(v HotelInfoTypeAddress)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *HotelInfoType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetHotelRestaurants

`func (o *HotelInfoType) GetHotelRestaurants() []HotelRestaurantType`

GetHotelRestaurants returns the HotelRestaurants field if non-nil, zero value otherwise.

### GetHotelRestaurantsOk

`func (o *HotelInfoType) GetHotelRestaurantsOk() (*[]HotelRestaurantType, bool)`

GetHotelRestaurantsOk returns a tuple with the HotelRestaurants field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRestaurants

`func (o *HotelInfoType) SetHotelRestaurants(v []HotelRestaurantType)`

SetHotelRestaurants sets HotelRestaurants field to given value.

### HasHotelRestaurants

`func (o *HotelInfoType) HasHotelRestaurants() bool`

HasHotelRestaurants returns a boolean if a field has been set.

### GetHotelRateRanges

`func (o *HotelInfoType) GetHotelRateRanges() []HotelRateRangeType`

GetHotelRateRanges returns the HotelRateRanges field if non-nil, zero value otherwise.

### GetHotelRateRangesOk

`func (o *HotelInfoType) GetHotelRateRangesOk() (*[]HotelRateRangeType, bool)`

GetHotelRateRangesOk returns a tuple with the HotelRateRanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRateRanges

`func (o *HotelInfoType) SetHotelRateRanges(v []HotelRateRangeType)`

SetHotelRateRanges sets HotelRateRanges field to given value.

### HasHotelRateRanges

`func (o *HotelInfoType) HasHotelRateRanges() bool`

HasHotelRateRanges returns a boolean if a field has been set.

### GetAlternateHotels

`func (o *HotelInfoType) GetAlternateHotels() []AlternateHotelType`

GetAlternateHotels returns the AlternateHotels field if non-nil, zero value otherwise.

### GetAlternateHotelsOk

`func (o *HotelInfoType) GetAlternateHotelsOk() (*[]AlternateHotelType, bool)`

GetAlternateHotelsOk returns a tuple with the AlternateHotels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateHotels

`func (o *HotelInfoType) SetAlternateHotels(v []AlternateHotelType)`

SetAlternateHotels sets AlternateHotels field to given value.

### HasAlternateHotels

`func (o *HotelInfoType) HasAlternateHotels() bool`

HasAlternateHotels returns a boolean if a field has been set.

### GetHotelContacts

`func (o *HotelInfoType) GetHotelContacts() []HotelContactType`

GetHotelContacts returns the HotelContacts field if non-nil, zero value otherwise.

### GetHotelContactsOk

`func (o *HotelInfoType) GetHotelContactsOk() (*[]HotelContactType, bool)`

GetHotelContactsOk returns a tuple with the HotelContacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelContacts

`func (o *HotelInfoType) SetHotelContacts(v []HotelContactType)`

SetHotelContacts sets HotelContacts field to given value.

### HasHotelContacts

`func (o *HotelInfoType) HasHotelContacts() bool`

HasHotelContacts returns a boolean if a field has been set.

### GetHotelEventSpaces

`func (o *HotelInfoType) GetHotelEventSpaces() HotelEventSpacesType`

GetHotelEventSpaces returns the HotelEventSpaces field if non-nil, zero value otherwise.

### GetHotelEventSpacesOk

`func (o *HotelInfoType) GetHotelEventSpacesOk() (*HotelEventSpacesType, bool)`

GetHotelEventSpacesOk returns a tuple with the HotelEventSpaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelEventSpaces

`func (o *HotelInfoType) SetHotelEventSpaces(v HotelEventSpacesType)`

SetHotelEventSpaces sets HotelEventSpaces field to given value.

### HasHotelEventSpaces

`func (o *HotelInfoType) HasHotelEventSpaces() bool`

HasHotelEventSpaces returns a boolean if a field has been set.

### GetHotelNotes

`func (o *HotelInfoType) GetHotelNotes() []CommentInfoType`

GetHotelNotes returns the HotelNotes field if non-nil, zero value otherwise.

### GetHotelNotesOk

`func (o *HotelInfoType) GetHotelNotesOk() (*[]CommentInfoType, bool)`

GetHotelNotesOk returns a tuple with the HotelNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelNotes

`func (o *HotelInfoType) SetHotelNotes(v []CommentInfoType)`

SetHotelNotes sets HotelNotes field to given value.

### HasHotelNotes

`func (o *HotelInfoType) HasHotelNotes() bool`

HasHotelNotes returns a boolean if a field has been set.

### GetHotelCorporateInformations

`func (o *HotelInfoType) GetHotelCorporateInformations() HotelCorporateInformationsType`

GetHotelCorporateInformations returns the HotelCorporateInformations field if non-nil, zero value otherwise.

### GetHotelCorporateInformationsOk

`func (o *HotelInfoType) GetHotelCorporateInformationsOk() (*HotelCorporateInformationsType, bool)`

GetHotelCorporateInformationsOk returns a tuple with the HotelCorporateInformations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCorporateInformations

`func (o *HotelInfoType) SetHotelCorporateInformations(v HotelCorporateInformationsType)`

SetHotelCorporateInformations sets HotelCorporateInformations field to given value.

### HasHotelCorporateInformations

`func (o *HotelInfoType) HasHotelCorporateInformations() bool`

HasHotelCorporateInformations returns a boolean if a field has been set.

### GetAttractions

`func (o *HotelInfoType) GetAttractions() []HotelAttractionType`

GetAttractions returns the Attractions field if non-nil, zero value otherwise.

### GetAttractionsOk

`func (o *HotelInfoType) GetAttractionsOk() (*[]HotelAttractionType, bool)`

GetAttractionsOk returns a tuple with the Attractions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttractions

`func (o *HotelInfoType) SetAttractions(v []HotelAttractionType)`

SetAttractions sets Attractions field to given value.

### HasAttractions

`func (o *HotelInfoType) HasAttractions() bool`

HasAttractions returns a boolean if a field has been set.

### GetMeetingRooms

`func (o *HotelInfoType) GetMeetingRooms() []MeetingRoomType`

GetMeetingRooms returns the MeetingRooms field if non-nil, zero value otherwise.

### GetMeetingRoomsOk

`func (o *HotelInfoType) GetMeetingRoomsOk() (*[]MeetingRoomType, bool)`

GetMeetingRoomsOk returns a tuple with the MeetingRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeetingRooms

`func (o *HotelInfoType) SetMeetingRooms(v []MeetingRoomType)`

SetMeetingRooms sets MeetingRooms field to given value.

### HasMeetingRooms

`func (o *HotelInfoType) HasMeetingRooms() bool`

HasMeetingRooms returns a boolean if a field has been set.

### GetChainCode

`func (o *HotelInfoType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *HotelInfoType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *HotelInfoType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *HotelInfoType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelCityCode

`func (o *HotelInfoType) GetHotelCityCode() string`

GetHotelCityCode returns the HotelCityCode field if non-nil, zero value otherwise.

### GetHotelCityCodeOk

`func (o *HotelInfoType) GetHotelCityCodeOk() (*string, bool)`

GetHotelCityCodeOk returns a tuple with the HotelCityCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCityCode

`func (o *HotelInfoType) SetHotelCityCode(v string)`

SetHotelCityCode sets HotelCityCode field to given value.

### HasHotelCityCode

`func (o *HotelInfoType) HasHotelCityCode() bool`

HasHotelCityCode returns a boolean if a field has been set.

### GetHotelName

`func (o *HotelInfoType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *HotelInfoType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *HotelInfoType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *HotelInfoType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetHotelCodeContext

`func (o *HotelInfoType) GetHotelCodeContext() string`

GetHotelCodeContext returns the HotelCodeContext field if non-nil, zero value otherwise.

### GetHotelCodeContextOk

`func (o *HotelInfoType) GetHotelCodeContextOk() (*string, bool)`

GetHotelCodeContextOk returns a tuple with the HotelCodeContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodeContext

`func (o *HotelInfoType) SetHotelCodeContext(v string)`

SetHotelCodeContext sets HotelCodeContext field to given value.

### HasHotelCodeContext

`func (o *HotelInfoType) HasHotelCodeContext() bool`

HasHotelCodeContext returns a boolean if a field has been set.

### GetChainName

`func (o *HotelInfoType) GetChainName() string`

GetChainName returns the ChainName field if non-nil, zero value otherwise.

### GetChainNameOk

`func (o *HotelInfoType) GetChainNameOk() (*string, bool)`

GetChainNameOk returns a tuple with the ChainName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainName

`func (o *HotelInfoType) SetChainName(v string)`

SetChainName sets ChainName field to given value.

### HasChainName

`func (o *HotelInfoType) HasChainName() bool`

HasChainName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


