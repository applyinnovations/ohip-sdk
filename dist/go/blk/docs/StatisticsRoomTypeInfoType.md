# StatisticsRoomTypeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BedTypeCodes** | Pointer to **[]string** | Bed type code associated with room. | [optional] 
**BookingChannelMappings** | Pointer to [**[]BookingChannelMappingType**](BookingChannelMappingType.md) | Booking Channels mapping for the Room Type. | [optional] 
**Component** | Pointer to **bool** | Indicates room type is a Component Room. | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**InvBlockCode** | Pointer to **string** | Block code. | [optional] 
**LongDescription** | Pointer to **string** | Detail description of the Room Type. | [optional] 
**PromotionCode** | Pointer to **string** | Represents the promotional code. | [optional] 
**RoomCategory** | Pointer to **string** |  | [optional] 
**RoomClass** | Pointer to **string** |  | [optional] 
**RoomFeatures** | Pointer to [**[]RoomFeatureType**](RoomFeatureType.md) | A recurring element that identifies the room features. | [optional] 
**RoomQualifierCode** | Pointer to **string** | Represents the room qualifier code like Deluxe,Economy,Suite etc. | [optional] 
**RoomQualifierMatchIndicator** | Pointer to **string** | Represents the match indicator of room qualifier code returned in the response with the requested room qualifier code. | [optional] 
**RoomType** | Pointer to **string** |  | [optional] 
**RoomTypeAttributes** | Pointer to [**RoomTypeAttributesType**](RoomTypeAttributesType.md) |  | [optional] 
**RoomViewCode** | Pointer to **string** | Represents the room view code like City view, River view, Ocean view etc. | [optional] 
**Suite** | Pointer to **bool** | Indicates room type is a suite. | [optional] 
**WebName** | Pointer to **string** | Name corresponding to a RoomType. | [optional] 
**WebPage** | Pointer to **string** | URL providing more information about the Room Type. | [optional] 

## Methods

### NewStatisticsRoomTypeInfoType

`func NewStatisticsRoomTypeInfoType() *StatisticsRoomTypeInfoType`

NewStatisticsRoomTypeInfoType instantiates a new StatisticsRoomTypeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatisticsRoomTypeInfoTypeWithDefaults

`func NewStatisticsRoomTypeInfoTypeWithDefaults() *StatisticsRoomTypeInfoType`

NewStatisticsRoomTypeInfoTypeWithDefaults instantiates a new StatisticsRoomTypeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBedTypeCodes

`func (o *StatisticsRoomTypeInfoType) GetBedTypeCodes() []string`

GetBedTypeCodes returns the BedTypeCodes field if non-nil, zero value otherwise.

### GetBedTypeCodesOk

`func (o *StatisticsRoomTypeInfoType) GetBedTypeCodesOk() (*[]string, bool)`

GetBedTypeCodesOk returns a tuple with the BedTypeCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedTypeCodes

`func (o *StatisticsRoomTypeInfoType) SetBedTypeCodes(v []string)`

SetBedTypeCodes sets BedTypeCodes field to given value.

### HasBedTypeCodes

`func (o *StatisticsRoomTypeInfoType) HasBedTypeCodes() bool`

HasBedTypeCodes returns a boolean if a field has been set.

### GetBookingChannelMappings

`func (o *StatisticsRoomTypeInfoType) GetBookingChannelMappings() []BookingChannelMappingType`

GetBookingChannelMappings returns the BookingChannelMappings field if non-nil, zero value otherwise.

### GetBookingChannelMappingsOk

`func (o *StatisticsRoomTypeInfoType) GetBookingChannelMappingsOk() (*[]BookingChannelMappingType, bool)`

GetBookingChannelMappingsOk returns a tuple with the BookingChannelMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelMappings

`func (o *StatisticsRoomTypeInfoType) SetBookingChannelMappings(v []BookingChannelMappingType)`

SetBookingChannelMappings sets BookingChannelMappings field to given value.

### HasBookingChannelMappings

`func (o *StatisticsRoomTypeInfoType) HasBookingChannelMappings() bool`

HasBookingChannelMappings returns a boolean if a field has been set.

### GetComponent

`func (o *StatisticsRoomTypeInfoType) GetComponent() bool`

GetComponent returns the Component field if non-nil, zero value otherwise.

### GetComponentOk

`func (o *StatisticsRoomTypeInfoType) GetComponentOk() (*bool, bool)`

GetComponentOk returns a tuple with the Component field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponent

`func (o *StatisticsRoomTypeInfoType) SetComponent(v bool)`

SetComponent sets Component field to given value.

### HasComponent

`func (o *StatisticsRoomTypeInfoType) HasComponent() bool`

HasComponent returns a boolean if a field has been set.

### GetDescription

`func (o *StatisticsRoomTypeInfoType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *StatisticsRoomTypeInfoType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *StatisticsRoomTypeInfoType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *StatisticsRoomTypeInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *StatisticsRoomTypeInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *StatisticsRoomTypeInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *StatisticsRoomTypeInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *StatisticsRoomTypeInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInvBlockCode

`func (o *StatisticsRoomTypeInfoType) GetInvBlockCode() string`

GetInvBlockCode returns the InvBlockCode field if non-nil, zero value otherwise.

### GetInvBlockCodeOk

`func (o *StatisticsRoomTypeInfoType) GetInvBlockCodeOk() (*string, bool)`

GetInvBlockCodeOk returns a tuple with the InvBlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvBlockCode

`func (o *StatisticsRoomTypeInfoType) SetInvBlockCode(v string)`

SetInvBlockCode sets InvBlockCode field to given value.

### HasInvBlockCode

`func (o *StatisticsRoomTypeInfoType) HasInvBlockCode() bool`

HasInvBlockCode returns a boolean if a field has been set.

### GetLongDescription

`func (o *StatisticsRoomTypeInfoType) GetLongDescription() string`

GetLongDescription returns the LongDescription field if non-nil, zero value otherwise.

### GetLongDescriptionOk

`func (o *StatisticsRoomTypeInfoType) GetLongDescriptionOk() (*string, bool)`

GetLongDescriptionOk returns a tuple with the LongDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongDescription

`func (o *StatisticsRoomTypeInfoType) SetLongDescription(v string)`

SetLongDescription sets LongDescription field to given value.

### HasLongDescription

`func (o *StatisticsRoomTypeInfoType) HasLongDescription() bool`

HasLongDescription returns a boolean if a field has been set.

### GetPromotionCode

`func (o *StatisticsRoomTypeInfoType) GetPromotionCode() string`

GetPromotionCode returns the PromotionCode field if non-nil, zero value otherwise.

### GetPromotionCodeOk

`func (o *StatisticsRoomTypeInfoType) GetPromotionCodeOk() (*string, bool)`

GetPromotionCodeOk returns a tuple with the PromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCode

`func (o *StatisticsRoomTypeInfoType) SetPromotionCode(v string)`

SetPromotionCode sets PromotionCode field to given value.

### HasPromotionCode

`func (o *StatisticsRoomTypeInfoType) HasPromotionCode() bool`

HasPromotionCode returns a boolean if a field has been set.

### GetRoomCategory

`func (o *StatisticsRoomTypeInfoType) GetRoomCategory() string`

GetRoomCategory returns the RoomCategory field if non-nil, zero value otherwise.

### GetRoomCategoryOk

`func (o *StatisticsRoomTypeInfoType) GetRoomCategoryOk() (*string, bool)`

GetRoomCategoryOk returns a tuple with the RoomCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomCategory

`func (o *StatisticsRoomTypeInfoType) SetRoomCategory(v string)`

SetRoomCategory sets RoomCategory field to given value.

### HasRoomCategory

`func (o *StatisticsRoomTypeInfoType) HasRoomCategory() bool`

HasRoomCategory returns a boolean if a field has been set.

### GetRoomClass

`func (o *StatisticsRoomTypeInfoType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *StatisticsRoomTypeInfoType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *StatisticsRoomTypeInfoType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *StatisticsRoomTypeInfoType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *StatisticsRoomTypeInfoType) GetRoomFeatures() []RoomFeatureType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *StatisticsRoomTypeInfoType) GetRoomFeaturesOk() (*[]RoomFeatureType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *StatisticsRoomTypeInfoType) SetRoomFeatures(v []RoomFeatureType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *StatisticsRoomTypeInfoType) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetRoomQualifierCode

`func (o *StatisticsRoomTypeInfoType) GetRoomQualifierCode() string`

GetRoomQualifierCode returns the RoomQualifierCode field if non-nil, zero value otherwise.

### GetRoomQualifierCodeOk

`func (o *StatisticsRoomTypeInfoType) GetRoomQualifierCodeOk() (*string, bool)`

GetRoomQualifierCodeOk returns a tuple with the RoomQualifierCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomQualifierCode

`func (o *StatisticsRoomTypeInfoType) SetRoomQualifierCode(v string)`

SetRoomQualifierCode sets RoomQualifierCode field to given value.

### HasRoomQualifierCode

`func (o *StatisticsRoomTypeInfoType) HasRoomQualifierCode() bool`

HasRoomQualifierCode returns a boolean if a field has been set.

### GetRoomQualifierMatchIndicator

`func (o *StatisticsRoomTypeInfoType) GetRoomQualifierMatchIndicator() string`

GetRoomQualifierMatchIndicator returns the RoomQualifierMatchIndicator field if non-nil, zero value otherwise.

### GetRoomQualifierMatchIndicatorOk

`func (o *StatisticsRoomTypeInfoType) GetRoomQualifierMatchIndicatorOk() (*string, bool)`

GetRoomQualifierMatchIndicatorOk returns a tuple with the RoomQualifierMatchIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomQualifierMatchIndicator

`func (o *StatisticsRoomTypeInfoType) SetRoomQualifierMatchIndicator(v string)`

SetRoomQualifierMatchIndicator sets RoomQualifierMatchIndicator field to given value.

### HasRoomQualifierMatchIndicator

`func (o *StatisticsRoomTypeInfoType) HasRoomQualifierMatchIndicator() bool`

HasRoomQualifierMatchIndicator returns a boolean if a field has been set.

### GetRoomType

`func (o *StatisticsRoomTypeInfoType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *StatisticsRoomTypeInfoType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *StatisticsRoomTypeInfoType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *StatisticsRoomTypeInfoType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomTypeAttributes

`func (o *StatisticsRoomTypeInfoType) GetRoomTypeAttributes() RoomTypeAttributesType`

GetRoomTypeAttributes returns the RoomTypeAttributes field if non-nil, zero value otherwise.

### GetRoomTypeAttributesOk

`func (o *StatisticsRoomTypeInfoType) GetRoomTypeAttributesOk() (*RoomTypeAttributesType, bool)`

GetRoomTypeAttributesOk returns a tuple with the RoomTypeAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeAttributes

`func (o *StatisticsRoomTypeInfoType) SetRoomTypeAttributes(v RoomTypeAttributesType)`

SetRoomTypeAttributes sets RoomTypeAttributes field to given value.

### HasRoomTypeAttributes

`func (o *StatisticsRoomTypeInfoType) HasRoomTypeAttributes() bool`

HasRoomTypeAttributes returns a boolean if a field has been set.

### GetRoomViewCode

`func (o *StatisticsRoomTypeInfoType) GetRoomViewCode() string`

GetRoomViewCode returns the RoomViewCode field if non-nil, zero value otherwise.

### GetRoomViewCodeOk

`func (o *StatisticsRoomTypeInfoType) GetRoomViewCodeOk() (*string, bool)`

GetRoomViewCodeOk returns a tuple with the RoomViewCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomViewCode

`func (o *StatisticsRoomTypeInfoType) SetRoomViewCode(v string)`

SetRoomViewCode sets RoomViewCode field to given value.

### HasRoomViewCode

`func (o *StatisticsRoomTypeInfoType) HasRoomViewCode() bool`

HasRoomViewCode returns a boolean if a field has been set.

### GetSuite

`func (o *StatisticsRoomTypeInfoType) GetSuite() bool`

GetSuite returns the Suite field if non-nil, zero value otherwise.

### GetSuiteOk

`func (o *StatisticsRoomTypeInfoType) GetSuiteOk() (*bool, bool)`

GetSuiteOk returns a tuple with the Suite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuite

`func (o *StatisticsRoomTypeInfoType) SetSuite(v bool)`

SetSuite sets Suite field to given value.

### HasSuite

`func (o *StatisticsRoomTypeInfoType) HasSuite() bool`

HasSuite returns a boolean if a field has been set.

### GetWebName

`func (o *StatisticsRoomTypeInfoType) GetWebName() string`

GetWebName returns the WebName field if non-nil, zero value otherwise.

### GetWebNameOk

`func (o *StatisticsRoomTypeInfoType) GetWebNameOk() (*string, bool)`

GetWebNameOk returns a tuple with the WebName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebName

`func (o *StatisticsRoomTypeInfoType) SetWebName(v string)`

SetWebName sets WebName field to given value.

### HasWebName

`func (o *StatisticsRoomTypeInfoType) HasWebName() bool`

HasWebName returns a boolean if a field has been set.

### GetWebPage

`func (o *StatisticsRoomTypeInfoType) GetWebPage() string`

GetWebPage returns the WebPage field if non-nil, zero value otherwise.

### GetWebPageOk

`func (o *StatisticsRoomTypeInfoType) GetWebPageOk() (*string, bool)`

GetWebPageOk returns a tuple with the WebPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebPage

`func (o *StatisticsRoomTypeInfoType) SetWebPage(v string)`

SetWebPage sets WebPage field to given value.

### HasWebPage

`func (o *StatisticsRoomTypeInfoType) HasWebPage() bool`

HasWebPage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


