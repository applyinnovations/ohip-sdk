# HotelBrochureType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccommodationDetails** | Pointer to [**HotelBrochureTypeAccommodationDetails**](HotelBrochureTypeAccommodationDetails.md) |  | [optional] 
**Address** | Pointer to [**HotelBrochureTypeAddress**](HotelBrochureTypeAddress.md) |  | [optional] 
**AlternateHotels** | Pointer to [**[]AlternateHotelType**](AlternateHotelType.md) |  | [optional] 
**Attractions** | Pointer to [**[]HotelAttractionType**](HotelAttractionType.md) |  | [optional] 
**BaseLanguage** | Pointer to **string** |  | [optional] 
**ChainCode** | Pointer to **string** | The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute. | [optional] 
**ChainName** | Pointer to **string** | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). | [optional] 
**Communication** | Pointer to [**HotelBrochureTypeCommunication**](HotelBrochureTypeCommunication.md) |  | [optional] 
**CurrentTime** | Pointer to **string** | The time when login hotel brochure. | [optional] 
**Directions** | Pointer to [**[]DirectionType**](DirectionType.md) | Collection of direction details to get into Hotel. | [optional] 
**GeneralInformation** | Pointer to [**HotelBrochureTypeGeneralInformation**](HotelBrochureTypeGeneralInformation.md) |  | [optional] 
**GeneralNotes** | Pointer to [**[]GeneralNoteType**](GeneralNoteType.md) | Collection of general notes about the Hotel. | [optional] 
**HotelAirports** | Pointer to [**[]HotelAirportType**](HotelAirportType.md) | Collection of Airport details of the Hotel | [optional] 
**HotelAttractions** | Pointer to [**[]HotelAttractionType**](HotelAttractionType.md) |  | [optional] 
**HotelCityCode** | Pointer to **string** | The IATA city code; for example DCA, ORD. | [optional] 
**HotelCodeContext** | Pointer to **string** | A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes. | [optional] 
**HotelConferenceFacilities** | Pointer to [**HotelConferenceFacilitiesType**](HotelConferenceFacilitiesType.md) |  | [optional] 
**HotelContacts** | Pointer to [**[]HotelContactType**](HotelContactType.md) | Lists of contacts of the hotel. | [optional] 
**HotelCorporateInformations** | Pointer to [**HotelCorporateInformationsType**](HotelCorporateInformationsType.md) |  | [optional] 
**HotelEventSpaces** | Pointer to [**HotelEventSpacesType**](HotelEventSpacesType.md) |  | [optional] 
**HotelFeatures** | Pointer to [**[]HotelFeatureType**](HotelFeatureType.md) | Collection of Features in the Hotel | [optional] 
**HotelId** | Pointer to **string** | The code that uniquely identifies a single hotel property. The hotel code is decided between vendors. | [optional] 
**HotelMiscellaneousInformation** | Pointer to [**[]HotelUserDefinedFieldType**](HotelUserDefinedFieldType.md) |  | [optional] 
**HotelName** | Pointer to **string** | A text field used to communicate the proper name of the hotel. | [optional] 
**HotelNotes** | Pointer to [**[]CommentInfoType**](CommentInfoType.md) | List of Notes of the hotel. | [optional] 
**HotelPackages** | Pointer to [**[]HotelPackageType**](HotelPackageType.md) |  | [optional] 
**HotelRateRanges** | Pointer to [**[]HotelRateRangeType**](HotelRateRangeType.md) | Lists of rate ranges of the hotel. | [optional] 
**HotelRestaurants** | Pointer to [**[]HotelRestaurantType**](HotelRestaurantType.md) |  | [optional] 
**HotelTransportations** | Pointer to [**[]HotelTransportationType**](HotelTransportationType.md) |  | [optional] 
**MeetingRooms** | Pointer to [**[]MeetingRoomType**](MeetingRoomType.md) | List of meeting rooms of the hotel. | [optional] 
**PrimaryDetails** | Pointer to [**HotelBrochureTypePrimaryDetails**](HotelBrochureTypePrimaryDetails.md) |  | [optional] 
**PropertyControls** | Pointer to [**HotelBrochureTypePropertyControls**](HotelBrochureTypePropertyControls.md) |  | [optional] 

## Methods

### NewHotelBrochureType

`func NewHotelBrochureType() *HotelBrochureType`

NewHotelBrochureType instantiates a new HotelBrochureType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelBrochureTypeWithDefaults

`func NewHotelBrochureTypeWithDefaults() *HotelBrochureType`

NewHotelBrochureTypeWithDefaults instantiates a new HotelBrochureType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccommodationDetails

`func (o *HotelBrochureType) GetAccommodationDetails() HotelBrochureTypeAccommodationDetails`

GetAccommodationDetails returns the AccommodationDetails field if non-nil, zero value otherwise.

### GetAccommodationDetailsOk

`func (o *HotelBrochureType) GetAccommodationDetailsOk() (*HotelBrochureTypeAccommodationDetails, bool)`

GetAccommodationDetailsOk returns a tuple with the AccommodationDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccommodationDetails

`func (o *HotelBrochureType) SetAccommodationDetails(v HotelBrochureTypeAccommodationDetails)`

SetAccommodationDetails sets AccommodationDetails field to given value.

### HasAccommodationDetails

`func (o *HotelBrochureType) HasAccommodationDetails() bool`

HasAccommodationDetails returns a boolean if a field has been set.

### GetAddress

`func (o *HotelBrochureType) GetAddress() HotelBrochureTypeAddress`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *HotelBrochureType) GetAddressOk() (*HotelBrochureTypeAddress, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *HotelBrochureType) SetAddress(v HotelBrochureTypeAddress)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *HotelBrochureType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetAlternateHotels

`func (o *HotelBrochureType) GetAlternateHotels() []AlternateHotelType`

GetAlternateHotels returns the AlternateHotels field if non-nil, zero value otherwise.

### GetAlternateHotelsOk

`func (o *HotelBrochureType) GetAlternateHotelsOk() (*[]AlternateHotelType, bool)`

GetAlternateHotelsOk returns a tuple with the AlternateHotels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAlternateHotels

`func (o *HotelBrochureType) SetAlternateHotels(v []AlternateHotelType)`

SetAlternateHotels sets AlternateHotels field to given value.

### HasAlternateHotels

`func (o *HotelBrochureType) HasAlternateHotels() bool`

HasAlternateHotels returns a boolean if a field has been set.

### GetAttractions

`func (o *HotelBrochureType) GetAttractions() []HotelAttractionType`

GetAttractions returns the Attractions field if non-nil, zero value otherwise.

### GetAttractionsOk

`func (o *HotelBrochureType) GetAttractionsOk() (*[]HotelAttractionType, bool)`

GetAttractionsOk returns a tuple with the Attractions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttractions

`func (o *HotelBrochureType) SetAttractions(v []HotelAttractionType)`

SetAttractions sets Attractions field to given value.

### HasAttractions

`func (o *HotelBrochureType) HasAttractions() bool`

HasAttractions returns a boolean if a field has been set.

### GetBaseLanguage

`func (o *HotelBrochureType) GetBaseLanguage() string`

GetBaseLanguage returns the BaseLanguage field if non-nil, zero value otherwise.

### GetBaseLanguageOk

`func (o *HotelBrochureType) GetBaseLanguageOk() (*string, bool)`

GetBaseLanguageOk returns a tuple with the BaseLanguage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseLanguage

`func (o *HotelBrochureType) SetBaseLanguage(v string)`

SetBaseLanguage sets BaseLanguage field to given value.

### HasBaseLanguage

`func (o *HotelBrochureType) HasBaseLanguage() bool`

HasBaseLanguage returns a boolean if a field has been set.

### GetChainCode

`func (o *HotelBrochureType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *HotelBrochureType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *HotelBrochureType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *HotelBrochureType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetChainName

`func (o *HotelBrochureType) GetChainName() string`

GetChainName returns the ChainName field if non-nil, zero value otherwise.

### GetChainNameOk

`func (o *HotelBrochureType) GetChainNameOk() (*string, bool)`

GetChainNameOk returns a tuple with the ChainName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainName

`func (o *HotelBrochureType) SetChainName(v string)`

SetChainName sets ChainName field to given value.

### HasChainName

`func (o *HotelBrochureType) HasChainName() bool`

HasChainName returns a boolean if a field has been set.

### GetCommunication

`func (o *HotelBrochureType) GetCommunication() HotelBrochureTypeCommunication`

GetCommunication returns the Communication field if non-nil, zero value otherwise.

### GetCommunicationOk

`func (o *HotelBrochureType) GetCommunicationOk() (*HotelBrochureTypeCommunication, bool)`

GetCommunicationOk returns a tuple with the Communication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommunication

`func (o *HotelBrochureType) SetCommunication(v HotelBrochureTypeCommunication)`

SetCommunication sets Communication field to given value.

### HasCommunication

`func (o *HotelBrochureType) HasCommunication() bool`

HasCommunication returns a boolean if a field has been set.

### GetCurrentTime

`func (o *HotelBrochureType) GetCurrentTime() string`

GetCurrentTime returns the CurrentTime field if non-nil, zero value otherwise.

### GetCurrentTimeOk

`func (o *HotelBrochureType) GetCurrentTimeOk() (*string, bool)`

GetCurrentTimeOk returns a tuple with the CurrentTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentTime

`func (o *HotelBrochureType) SetCurrentTime(v string)`

SetCurrentTime sets CurrentTime field to given value.

### HasCurrentTime

`func (o *HotelBrochureType) HasCurrentTime() bool`

HasCurrentTime returns a boolean if a field has been set.

### GetDirections

`func (o *HotelBrochureType) GetDirections() []DirectionType`

GetDirections returns the Directions field if non-nil, zero value otherwise.

### GetDirectionsOk

`func (o *HotelBrochureType) GetDirectionsOk() (*[]DirectionType, bool)`

GetDirectionsOk returns a tuple with the Directions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirections

`func (o *HotelBrochureType) SetDirections(v []DirectionType)`

SetDirections sets Directions field to given value.

### HasDirections

`func (o *HotelBrochureType) HasDirections() bool`

HasDirections returns a boolean if a field has been set.

### GetGeneralInformation

`func (o *HotelBrochureType) GetGeneralInformation() HotelBrochureTypeGeneralInformation`

GetGeneralInformation returns the GeneralInformation field if non-nil, zero value otherwise.

### GetGeneralInformationOk

`func (o *HotelBrochureType) GetGeneralInformationOk() (*HotelBrochureTypeGeneralInformation, bool)`

GetGeneralInformationOk returns a tuple with the GeneralInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneralInformation

`func (o *HotelBrochureType) SetGeneralInformation(v HotelBrochureTypeGeneralInformation)`

SetGeneralInformation sets GeneralInformation field to given value.

### HasGeneralInformation

`func (o *HotelBrochureType) HasGeneralInformation() bool`

HasGeneralInformation returns a boolean if a field has been set.

### GetGeneralNotes

`func (o *HotelBrochureType) GetGeneralNotes() []GeneralNoteType`

GetGeneralNotes returns the GeneralNotes field if non-nil, zero value otherwise.

### GetGeneralNotesOk

`func (o *HotelBrochureType) GetGeneralNotesOk() (*[]GeneralNoteType, bool)`

GetGeneralNotesOk returns a tuple with the GeneralNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneralNotes

`func (o *HotelBrochureType) SetGeneralNotes(v []GeneralNoteType)`

SetGeneralNotes sets GeneralNotes field to given value.

### HasGeneralNotes

`func (o *HotelBrochureType) HasGeneralNotes() bool`

HasGeneralNotes returns a boolean if a field has been set.

### GetHotelAirports

`func (o *HotelBrochureType) GetHotelAirports() []HotelAirportType`

GetHotelAirports returns the HotelAirports field if non-nil, zero value otherwise.

### GetHotelAirportsOk

`func (o *HotelBrochureType) GetHotelAirportsOk() (*[]HotelAirportType, bool)`

GetHotelAirportsOk returns a tuple with the HotelAirports field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelAirports

`func (o *HotelBrochureType) SetHotelAirports(v []HotelAirportType)`

SetHotelAirports sets HotelAirports field to given value.

### HasHotelAirports

`func (o *HotelBrochureType) HasHotelAirports() bool`

HasHotelAirports returns a boolean if a field has been set.

### GetHotelAttractions

`func (o *HotelBrochureType) GetHotelAttractions() []HotelAttractionType`

GetHotelAttractions returns the HotelAttractions field if non-nil, zero value otherwise.

### GetHotelAttractionsOk

`func (o *HotelBrochureType) GetHotelAttractionsOk() (*[]HotelAttractionType, bool)`

GetHotelAttractionsOk returns a tuple with the HotelAttractions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelAttractions

`func (o *HotelBrochureType) SetHotelAttractions(v []HotelAttractionType)`

SetHotelAttractions sets HotelAttractions field to given value.

### HasHotelAttractions

`func (o *HotelBrochureType) HasHotelAttractions() bool`

HasHotelAttractions returns a boolean if a field has been set.

### GetHotelCityCode

`func (o *HotelBrochureType) GetHotelCityCode() string`

GetHotelCityCode returns the HotelCityCode field if non-nil, zero value otherwise.

### GetHotelCityCodeOk

`func (o *HotelBrochureType) GetHotelCityCodeOk() (*string, bool)`

GetHotelCityCodeOk returns a tuple with the HotelCityCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCityCode

`func (o *HotelBrochureType) SetHotelCityCode(v string)`

SetHotelCityCode sets HotelCityCode field to given value.

### HasHotelCityCode

`func (o *HotelBrochureType) HasHotelCityCode() bool`

HasHotelCityCode returns a boolean if a field has been set.

### GetHotelCodeContext

`func (o *HotelBrochureType) GetHotelCodeContext() string`

GetHotelCodeContext returns the HotelCodeContext field if non-nil, zero value otherwise.

### GetHotelCodeContextOk

`func (o *HotelBrochureType) GetHotelCodeContextOk() (*string, bool)`

GetHotelCodeContextOk returns a tuple with the HotelCodeContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodeContext

`func (o *HotelBrochureType) SetHotelCodeContext(v string)`

SetHotelCodeContext sets HotelCodeContext field to given value.

### HasHotelCodeContext

`func (o *HotelBrochureType) HasHotelCodeContext() bool`

HasHotelCodeContext returns a boolean if a field has been set.

### GetHotelConferenceFacilities

`func (o *HotelBrochureType) GetHotelConferenceFacilities() HotelConferenceFacilitiesType`

GetHotelConferenceFacilities returns the HotelConferenceFacilities field if non-nil, zero value otherwise.

### GetHotelConferenceFacilitiesOk

`func (o *HotelBrochureType) GetHotelConferenceFacilitiesOk() (*HotelConferenceFacilitiesType, bool)`

GetHotelConferenceFacilitiesOk returns a tuple with the HotelConferenceFacilities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelConferenceFacilities

`func (o *HotelBrochureType) SetHotelConferenceFacilities(v HotelConferenceFacilitiesType)`

SetHotelConferenceFacilities sets HotelConferenceFacilities field to given value.

### HasHotelConferenceFacilities

`func (o *HotelBrochureType) HasHotelConferenceFacilities() bool`

HasHotelConferenceFacilities returns a boolean if a field has been set.

### GetHotelContacts

`func (o *HotelBrochureType) GetHotelContacts() []HotelContactType`

GetHotelContacts returns the HotelContacts field if non-nil, zero value otherwise.

### GetHotelContactsOk

`func (o *HotelBrochureType) GetHotelContactsOk() (*[]HotelContactType, bool)`

GetHotelContactsOk returns a tuple with the HotelContacts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelContacts

`func (o *HotelBrochureType) SetHotelContacts(v []HotelContactType)`

SetHotelContacts sets HotelContacts field to given value.

### HasHotelContacts

`func (o *HotelBrochureType) HasHotelContacts() bool`

HasHotelContacts returns a boolean if a field has been set.

### GetHotelCorporateInformations

`func (o *HotelBrochureType) GetHotelCorporateInformations() HotelCorporateInformationsType`

GetHotelCorporateInformations returns the HotelCorporateInformations field if non-nil, zero value otherwise.

### GetHotelCorporateInformationsOk

`func (o *HotelBrochureType) GetHotelCorporateInformationsOk() (*HotelCorporateInformationsType, bool)`

GetHotelCorporateInformationsOk returns a tuple with the HotelCorporateInformations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCorporateInformations

`func (o *HotelBrochureType) SetHotelCorporateInformations(v HotelCorporateInformationsType)`

SetHotelCorporateInformations sets HotelCorporateInformations field to given value.

### HasHotelCorporateInformations

`func (o *HotelBrochureType) HasHotelCorporateInformations() bool`

HasHotelCorporateInformations returns a boolean if a field has been set.

### GetHotelEventSpaces

`func (o *HotelBrochureType) GetHotelEventSpaces() HotelEventSpacesType`

GetHotelEventSpaces returns the HotelEventSpaces field if non-nil, zero value otherwise.

### GetHotelEventSpacesOk

`func (o *HotelBrochureType) GetHotelEventSpacesOk() (*HotelEventSpacesType, bool)`

GetHotelEventSpacesOk returns a tuple with the HotelEventSpaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelEventSpaces

`func (o *HotelBrochureType) SetHotelEventSpaces(v HotelEventSpacesType)`

SetHotelEventSpaces sets HotelEventSpaces field to given value.

### HasHotelEventSpaces

`func (o *HotelBrochureType) HasHotelEventSpaces() bool`

HasHotelEventSpaces returns a boolean if a field has been set.

### GetHotelFeatures

`func (o *HotelBrochureType) GetHotelFeatures() []HotelFeatureType`

GetHotelFeatures returns the HotelFeatures field if non-nil, zero value otherwise.

### GetHotelFeaturesOk

`func (o *HotelBrochureType) GetHotelFeaturesOk() (*[]HotelFeatureType, bool)`

GetHotelFeaturesOk returns a tuple with the HotelFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelFeatures

`func (o *HotelBrochureType) SetHotelFeatures(v []HotelFeatureType)`

SetHotelFeatures sets HotelFeatures field to given value.

### HasHotelFeatures

`func (o *HotelBrochureType) HasHotelFeatures() bool`

HasHotelFeatures returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelBrochureType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelBrochureType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelBrochureType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelBrochureType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelMiscellaneousInformation

`func (o *HotelBrochureType) GetHotelMiscellaneousInformation() []HotelUserDefinedFieldType`

GetHotelMiscellaneousInformation returns the HotelMiscellaneousInformation field if non-nil, zero value otherwise.

### GetHotelMiscellaneousInformationOk

`func (o *HotelBrochureType) GetHotelMiscellaneousInformationOk() (*[]HotelUserDefinedFieldType, bool)`

GetHotelMiscellaneousInformationOk returns a tuple with the HotelMiscellaneousInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelMiscellaneousInformation

`func (o *HotelBrochureType) SetHotelMiscellaneousInformation(v []HotelUserDefinedFieldType)`

SetHotelMiscellaneousInformation sets HotelMiscellaneousInformation field to given value.

### HasHotelMiscellaneousInformation

`func (o *HotelBrochureType) HasHotelMiscellaneousInformation() bool`

HasHotelMiscellaneousInformation returns a boolean if a field has been set.

### GetHotelName

`func (o *HotelBrochureType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *HotelBrochureType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *HotelBrochureType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *HotelBrochureType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetHotelNotes

`func (o *HotelBrochureType) GetHotelNotes() []CommentInfoType`

GetHotelNotes returns the HotelNotes field if non-nil, zero value otherwise.

### GetHotelNotesOk

`func (o *HotelBrochureType) GetHotelNotesOk() (*[]CommentInfoType, bool)`

GetHotelNotesOk returns a tuple with the HotelNotes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelNotes

`func (o *HotelBrochureType) SetHotelNotes(v []CommentInfoType)`

SetHotelNotes sets HotelNotes field to given value.

### HasHotelNotes

`func (o *HotelBrochureType) HasHotelNotes() bool`

HasHotelNotes returns a boolean if a field has been set.

### GetHotelPackages

`func (o *HotelBrochureType) GetHotelPackages() []HotelPackageType`

GetHotelPackages returns the HotelPackages field if non-nil, zero value otherwise.

### GetHotelPackagesOk

`func (o *HotelBrochureType) GetHotelPackagesOk() (*[]HotelPackageType, bool)`

GetHotelPackagesOk returns a tuple with the HotelPackages field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelPackages

`func (o *HotelBrochureType) SetHotelPackages(v []HotelPackageType)`

SetHotelPackages sets HotelPackages field to given value.

### HasHotelPackages

`func (o *HotelBrochureType) HasHotelPackages() bool`

HasHotelPackages returns a boolean if a field has been set.

### GetHotelRateRanges

`func (o *HotelBrochureType) GetHotelRateRanges() []HotelRateRangeType`

GetHotelRateRanges returns the HotelRateRanges field if non-nil, zero value otherwise.

### GetHotelRateRangesOk

`func (o *HotelBrochureType) GetHotelRateRangesOk() (*[]HotelRateRangeType, bool)`

GetHotelRateRangesOk returns a tuple with the HotelRateRanges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRateRanges

`func (o *HotelBrochureType) SetHotelRateRanges(v []HotelRateRangeType)`

SetHotelRateRanges sets HotelRateRanges field to given value.

### HasHotelRateRanges

`func (o *HotelBrochureType) HasHotelRateRanges() bool`

HasHotelRateRanges returns a boolean if a field has been set.

### GetHotelRestaurants

`func (o *HotelBrochureType) GetHotelRestaurants() []HotelRestaurantType`

GetHotelRestaurants returns the HotelRestaurants field if non-nil, zero value otherwise.

### GetHotelRestaurantsOk

`func (o *HotelBrochureType) GetHotelRestaurantsOk() (*[]HotelRestaurantType, bool)`

GetHotelRestaurantsOk returns a tuple with the HotelRestaurants field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRestaurants

`func (o *HotelBrochureType) SetHotelRestaurants(v []HotelRestaurantType)`

SetHotelRestaurants sets HotelRestaurants field to given value.

### HasHotelRestaurants

`func (o *HotelBrochureType) HasHotelRestaurants() bool`

HasHotelRestaurants returns a boolean if a field has been set.

### GetHotelTransportations

`func (o *HotelBrochureType) GetHotelTransportations() []HotelTransportationType`

GetHotelTransportations returns the HotelTransportations field if non-nil, zero value otherwise.

### GetHotelTransportationsOk

`func (o *HotelBrochureType) GetHotelTransportationsOk() (*[]HotelTransportationType, bool)`

GetHotelTransportationsOk returns a tuple with the HotelTransportations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelTransportations

`func (o *HotelBrochureType) SetHotelTransportations(v []HotelTransportationType)`

SetHotelTransportations sets HotelTransportations field to given value.

### HasHotelTransportations

`func (o *HotelBrochureType) HasHotelTransportations() bool`

HasHotelTransportations returns a boolean if a field has been set.

### GetMeetingRooms

`func (o *HotelBrochureType) GetMeetingRooms() []MeetingRoomType`

GetMeetingRooms returns the MeetingRooms field if non-nil, zero value otherwise.

### GetMeetingRoomsOk

`func (o *HotelBrochureType) GetMeetingRoomsOk() (*[]MeetingRoomType, bool)`

GetMeetingRoomsOk returns a tuple with the MeetingRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeetingRooms

`func (o *HotelBrochureType) SetMeetingRooms(v []MeetingRoomType)`

SetMeetingRooms sets MeetingRooms field to given value.

### HasMeetingRooms

`func (o *HotelBrochureType) HasMeetingRooms() bool`

HasMeetingRooms returns a boolean if a field has been set.

### GetPrimaryDetails

`func (o *HotelBrochureType) GetPrimaryDetails() HotelBrochureTypePrimaryDetails`

GetPrimaryDetails returns the PrimaryDetails field if non-nil, zero value otherwise.

### GetPrimaryDetailsOk

`func (o *HotelBrochureType) GetPrimaryDetailsOk() (*HotelBrochureTypePrimaryDetails, bool)`

GetPrimaryDetailsOk returns a tuple with the PrimaryDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryDetails

`func (o *HotelBrochureType) SetPrimaryDetails(v HotelBrochureTypePrimaryDetails)`

SetPrimaryDetails sets PrimaryDetails field to given value.

### HasPrimaryDetails

`func (o *HotelBrochureType) HasPrimaryDetails() bool`

HasPrimaryDetails returns a boolean if a field has been set.

### GetPropertyControls

`func (o *HotelBrochureType) GetPropertyControls() HotelBrochureTypePropertyControls`

GetPropertyControls returns the PropertyControls field if non-nil, zero value otherwise.

### GetPropertyControlsOk

`func (o *HotelBrochureType) GetPropertyControlsOk() (*HotelBrochureTypePropertyControls, bool)`

GetPropertyControlsOk returns a tuple with the PropertyControls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyControls

`func (o *HotelBrochureType) SetPropertyControls(v HotelBrochureTypePropertyControls)`

SetPropertyControls sets PropertyControls field to given value.

### HasPropertyControls

`func (o *HotelBrochureType) HasPropertyControls() bool`

HasPropertyControls returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


