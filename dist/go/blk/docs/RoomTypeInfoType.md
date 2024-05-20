# RoomTypeInfoType

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

### NewRoomTypeInfoType

`func NewRoomTypeInfoType() *RoomTypeInfoType`

NewRoomTypeInfoType instantiates a new RoomTypeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypeInfoTypeWithDefaults

`func NewRoomTypeInfoTypeWithDefaults() *RoomTypeInfoType`

NewRoomTypeInfoTypeWithDefaults instantiates a new RoomTypeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBedTypeCodes

`func (o *RoomTypeInfoType) GetBedTypeCodes() []string`

GetBedTypeCodes returns the BedTypeCodes field if non-nil, zero value otherwise.

### GetBedTypeCodesOk

`func (o *RoomTypeInfoType) GetBedTypeCodesOk() (*[]string, bool)`

GetBedTypeCodesOk returns a tuple with the BedTypeCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedTypeCodes

`func (o *RoomTypeInfoType) SetBedTypeCodes(v []string)`

SetBedTypeCodes sets BedTypeCodes field to given value.

### HasBedTypeCodes

`func (o *RoomTypeInfoType) HasBedTypeCodes() bool`

HasBedTypeCodes returns a boolean if a field has been set.

### GetBookingChannelMappings

`func (o *RoomTypeInfoType) GetBookingChannelMappings() []BookingChannelMappingType`

GetBookingChannelMappings returns the BookingChannelMappings field if non-nil, zero value otherwise.

### GetBookingChannelMappingsOk

`func (o *RoomTypeInfoType) GetBookingChannelMappingsOk() (*[]BookingChannelMappingType, bool)`

GetBookingChannelMappingsOk returns a tuple with the BookingChannelMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelMappings

`func (o *RoomTypeInfoType) SetBookingChannelMappings(v []BookingChannelMappingType)`

SetBookingChannelMappings sets BookingChannelMappings field to given value.

### HasBookingChannelMappings

`func (o *RoomTypeInfoType) HasBookingChannelMappings() bool`

HasBookingChannelMappings returns a boolean if a field has been set.

### GetComponent

`func (o *RoomTypeInfoType) GetComponent() bool`

GetComponent returns the Component field if non-nil, zero value otherwise.

### GetComponentOk

`func (o *RoomTypeInfoType) GetComponentOk() (*bool, bool)`

GetComponentOk returns a tuple with the Component field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponent

`func (o *RoomTypeInfoType) SetComponent(v bool)`

SetComponent sets Component field to given value.

### HasComponent

`func (o *RoomTypeInfoType) HasComponent() bool`

HasComponent returns a boolean if a field has been set.

### GetDescription

`func (o *RoomTypeInfoType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoomTypeInfoType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoomTypeInfoType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoomTypeInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *RoomTypeInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomTypeInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomTypeInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomTypeInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInvBlockCode

`func (o *RoomTypeInfoType) GetInvBlockCode() string`

GetInvBlockCode returns the InvBlockCode field if non-nil, zero value otherwise.

### GetInvBlockCodeOk

`func (o *RoomTypeInfoType) GetInvBlockCodeOk() (*string, bool)`

GetInvBlockCodeOk returns a tuple with the InvBlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvBlockCode

`func (o *RoomTypeInfoType) SetInvBlockCode(v string)`

SetInvBlockCode sets InvBlockCode field to given value.

### HasInvBlockCode

`func (o *RoomTypeInfoType) HasInvBlockCode() bool`

HasInvBlockCode returns a boolean if a field has been set.

### GetLongDescription

`func (o *RoomTypeInfoType) GetLongDescription() string`

GetLongDescription returns the LongDescription field if non-nil, zero value otherwise.

### GetLongDescriptionOk

`func (o *RoomTypeInfoType) GetLongDescriptionOk() (*string, bool)`

GetLongDescriptionOk returns a tuple with the LongDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongDescription

`func (o *RoomTypeInfoType) SetLongDescription(v string)`

SetLongDescription sets LongDescription field to given value.

### HasLongDescription

`func (o *RoomTypeInfoType) HasLongDescription() bool`

HasLongDescription returns a boolean if a field has been set.

### GetPromotionCode

`func (o *RoomTypeInfoType) GetPromotionCode() string`

GetPromotionCode returns the PromotionCode field if non-nil, zero value otherwise.

### GetPromotionCodeOk

`func (o *RoomTypeInfoType) GetPromotionCodeOk() (*string, bool)`

GetPromotionCodeOk returns a tuple with the PromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCode

`func (o *RoomTypeInfoType) SetPromotionCode(v string)`

SetPromotionCode sets PromotionCode field to given value.

### HasPromotionCode

`func (o *RoomTypeInfoType) HasPromotionCode() bool`

HasPromotionCode returns a boolean if a field has been set.

### GetRoomClass

`func (o *RoomTypeInfoType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *RoomTypeInfoType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *RoomTypeInfoType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *RoomTypeInfoType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *RoomTypeInfoType) GetRoomFeatures() []RoomFeatureType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *RoomTypeInfoType) GetRoomFeaturesOk() (*[]RoomFeatureType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *RoomTypeInfoType) SetRoomFeatures(v []RoomFeatureType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *RoomTypeInfoType) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetRoomQualifierCode

`func (o *RoomTypeInfoType) GetRoomQualifierCode() string`

GetRoomQualifierCode returns the RoomQualifierCode field if non-nil, zero value otherwise.

### GetRoomQualifierCodeOk

`func (o *RoomTypeInfoType) GetRoomQualifierCodeOk() (*string, bool)`

GetRoomQualifierCodeOk returns a tuple with the RoomQualifierCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomQualifierCode

`func (o *RoomTypeInfoType) SetRoomQualifierCode(v string)`

SetRoomQualifierCode sets RoomQualifierCode field to given value.

### HasRoomQualifierCode

`func (o *RoomTypeInfoType) HasRoomQualifierCode() bool`

HasRoomQualifierCode returns a boolean if a field has been set.

### GetRoomQualifierMatchIndicator

`func (o *RoomTypeInfoType) GetRoomQualifierMatchIndicator() string`

GetRoomQualifierMatchIndicator returns the RoomQualifierMatchIndicator field if non-nil, zero value otherwise.

### GetRoomQualifierMatchIndicatorOk

`func (o *RoomTypeInfoType) GetRoomQualifierMatchIndicatorOk() (*string, bool)`

GetRoomQualifierMatchIndicatorOk returns a tuple with the RoomQualifierMatchIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomQualifierMatchIndicator

`func (o *RoomTypeInfoType) SetRoomQualifierMatchIndicator(v string)`

SetRoomQualifierMatchIndicator sets RoomQualifierMatchIndicator field to given value.

### HasRoomQualifierMatchIndicator

`func (o *RoomTypeInfoType) HasRoomQualifierMatchIndicator() bool`

HasRoomQualifierMatchIndicator returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomTypeInfoType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomTypeInfoType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomTypeInfoType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomTypeInfoType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomTypeAttributes

`func (o *RoomTypeInfoType) GetRoomTypeAttributes() RoomTypeAttributesType`

GetRoomTypeAttributes returns the RoomTypeAttributes field if non-nil, zero value otherwise.

### GetRoomTypeAttributesOk

`func (o *RoomTypeInfoType) GetRoomTypeAttributesOk() (*RoomTypeAttributesType, bool)`

GetRoomTypeAttributesOk returns a tuple with the RoomTypeAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeAttributes

`func (o *RoomTypeInfoType) SetRoomTypeAttributes(v RoomTypeAttributesType)`

SetRoomTypeAttributes sets RoomTypeAttributes field to given value.

### HasRoomTypeAttributes

`func (o *RoomTypeInfoType) HasRoomTypeAttributes() bool`

HasRoomTypeAttributes returns a boolean if a field has been set.

### GetRoomViewCode

`func (o *RoomTypeInfoType) GetRoomViewCode() string`

GetRoomViewCode returns the RoomViewCode field if non-nil, zero value otherwise.

### GetRoomViewCodeOk

`func (o *RoomTypeInfoType) GetRoomViewCodeOk() (*string, bool)`

GetRoomViewCodeOk returns a tuple with the RoomViewCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomViewCode

`func (o *RoomTypeInfoType) SetRoomViewCode(v string)`

SetRoomViewCode sets RoomViewCode field to given value.

### HasRoomViewCode

`func (o *RoomTypeInfoType) HasRoomViewCode() bool`

HasRoomViewCode returns a boolean if a field has been set.

### GetSuite

`func (o *RoomTypeInfoType) GetSuite() bool`

GetSuite returns the Suite field if non-nil, zero value otherwise.

### GetSuiteOk

`func (o *RoomTypeInfoType) GetSuiteOk() (*bool, bool)`

GetSuiteOk returns a tuple with the Suite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuite

`func (o *RoomTypeInfoType) SetSuite(v bool)`

SetSuite sets Suite field to given value.

### HasSuite

`func (o *RoomTypeInfoType) HasSuite() bool`

HasSuite returns a boolean if a field has been set.

### GetWebName

`func (o *RoomTypeInfoType) GetWebName() string`

GetWebName returns the WebName field if non-nil, zero value otherwise.

### GetWebNameOk

`func (o *RoomTypeInfoType) GetWebNameOk() (*string, bool)`

GetWebNameOk returns a tuple with the WebName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebName

`func (o *RoomTypeInfoType) SetWebName(v string)`

SetWebName sets WebName field to given value.

### HasWebName

`func (o *RoomTypeInfoType) HasWebName() bool`

HasWebName returns a boolean if a field has been set.

### GetWebPage

`func (o *RoomTypeInfoType) GetWebPage() string`

GetWebPage returns the WebPage field if non-nil, zero value otherwise.

### GetWebPageOk

`func (o *RoomTypeInfoType) GetWebPageOk() (*string, bool)`

GetWebPageOk returns a tuple with the WebPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebPage

`func (o *RoomTypeInfoType) SetWebPage(v string)`

SetWebPage sets WebPage field to given value.

### HasWebPage

`func (o *RoomTypeInfoType) HasWebPage() bool`

HasWebPage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


