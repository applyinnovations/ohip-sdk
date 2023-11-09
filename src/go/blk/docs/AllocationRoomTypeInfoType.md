# AllocationRoomTypeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Available** | Pointer to **bool** | Used to specify an availability status for the room type. | [optional] 
**BedTypeCodes** | Pointer to **[]string** | Bed type code associated with room. | [optional] 
**BookingChannelMappings** | Pointer to [**[]BookingChannelMappingType**](BookingChannelMappingType.md) | Booking Channels mapping for the Room Type. | [optional] 
**Component** | Pointer to **bool** | Indicates room type is a Component Room. | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**InvBlockCode** | Pointer to **string** | Block code. | [optional] 
**LongDescription** | Pointer to **string** | Detail description of the Room Type. | [optional] 
**PromotionCode** | Pointer to **string** | Represents the promotional code. | [optional] 
**RoomClass** | Pointer to **string** |  | [optional] 
**RoomFeatures** | Pointer to [**RoomFeaturesType**](RoomFeaturesType.md) |  | [optional] 
**RoomQualifierCode** | Pointer to **string** | Represents the room qualifier code like Deluxe,Economy,Suite etc. | [optional] 
**RoomQualifierMatchIndicator** | Pointer to **string** | Represents the match indicator of room qualifier code returned in the response with the requested room qualifier code. | [optional] 
**RoomType** | Pointer to **string** |  | [optional] 
**RoomTypeAttributes** | Pointer to [**RoomTypeAttributesType**](RoomTypeAttributesType.md) |  | [optional] 
**RoomViewCode** | Pointer to **string** | Represents the room view code like City view, River view, Ocean view etc. | [optional] 
**Suite** | Pointer to **bool** | Indicates room type is a suite. | [optional] 
**WebName** | Pointer to **string** | Name corresponding to a RoomType. | [optional] 
**WebPage** | Pointer to **string** | URL providing more information about the Room Type. | [optional] 

## Methods

### NewAllocationRoomTypeInfoType

`func NewAllocationRoomTypeInfoType() *AllocationRoomTypeInfoType`

NewAllocationRoomTypeInfoType instantiates a new AllocationRoomTypeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAllocationRoomTypeInfoTypeWithDefaults

`func NewAllocationRoomTypeInfoTypeWithDefaults() *AllocationRoomTypeInfoType`

NewAllocationRoomTypeInfoTypeWithDefaults instantiates a new AllocationRoomTypeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailable

`func (o *AllocationRoomTypeInfoType) GetAvailable() bool`

GetAvailable returns the Available field if non-nil, zero value otherwise.

### GetAvailableOk

`func (o *AllocationRoomTypeInfoType) GetAvailableOk() (*bool, bool)`

GetAvailableOk returns a tuple with the Available field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailable

`func (o *AllocationRoomTypeInfoType) SetAvailable(v bool)`

SetAvailable sets Available field to given value.

### HasAvailable

`func (o *AllocationRoomTypeInfoType) HasAvailable() bool`

HasAvailable returns a boolean if a field has been set.

### GetBedTypeCodes

`func (o *AllocationRoomTypeInfoType) GetBedTypeCodes() []string`

GetBedTypeCodes returns the BedTypeCodes field if non-nil, zero value otherwise.

### GetBedTypeCodesOk

`func (o *AllocationRoomTypeInfoType) GetBedTypeCodesOk() (*[]string, bool)`

GetBedTypeCodesOk returns a tuple with the BedTypeCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBedTypeCodes

`func (o *AllocationRoomTypeInfoType) SetBedTypeCodes(v []string)`

SetBedTypeCodes sets BedTypeCodes field to given value.

### HasBedTypeCodes

`func (o *AllocationRoomTypeInfoType) HasBedTypeCodes() bool`

HasBedTypeCodes returns a boolean if a field has been set.

### GetBookingChannelMappings

`func (o *AllocationRoomTypeInfoType) GetBookingChannelMappings() []BookingChannelMappingType`

GetBookingChannelMappings returns the BookingChannelMappings field if non-nil, zero value otherwise.

### GetBookingChannelMappingsOk

`func (o *AllocationRoomTypeInfoType) GetBookingChannelMappingsOk() (*[]BookingChannelMappingType, bool)`

GetBookingChannelMappingsOk returns a tuple with the BookingChannelMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelMappings

`func (o *AllocationRoomTypeInfoType) SetBookingChannelMappings(v []BookingChannelMappingType)`

SetBookingChannelMappings sets BookingChannelMappings field to given value.

### HasBookingChannelMappings

`func (o *AllocationRoomTypeInfoType) HasBookingChannelMappings() bool`

HasBookingChannelMappings returns a boolean if a field has been set.

### GetComponent

`func (o *AllocationRoomTypeInfoType) GetComponent() bool`

GetComponent returns the Component field if non-nil, zero value otherwise.

### GetComponentOk

`func (o *AllocationRoomTypeInfoType) GetComponentOk() (*bool, bool)`

GetComponentOk returns a tuple with the Component field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponent

`func (o *AllocationRoomTypeInfoType) SetComponent(v bool)`

SetComponent sets Component field to given value.

### HasComponent

`func (o *AllocationRoomTypeInfoType) HasComponent() bool`

HasComponent returns a boolean if a field has been set.

### GetDescription

`func (o *AllocationRoomTypeInfoType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AllocationRoomTypeInfoType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AllocationRoomTypeInfoType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AllocationRoomTypeInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *AllocationRoomTypeInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AllocationRoomTypeInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AllocationRoomTypeInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AllocationRoomTypeInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInvBlockCode

`func (o *AllocationRoomTypeInfoType) GetInvBlockCode() string`

GetInvBlockCode returns the InvBlockCode field if non-nil, zero value otherwise.

### GetInvBlockCodeOk

`func (o *AllocationRoomTypeInfoType) GetInvBlockCodeOk() (*string, bool)`

GetInvBlockCodeOk returns a tuple with the InvBlockCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvBlockCode

`func (o *AllocationRoomTypeInfoType) SetInvBlockCode(v string)`

SetInvBlockCode sets InvBlockCode field to given value.

### HasInvBlockCode

`func (o *AllocationRoomTypeInfoType) HasInvBlockCode() bool`

HasInvBlockCode returns a boolean if a field has been set.

### GetLongDescription

`func (o *AllocationRoomTypeInfoType) GetLongDescription() string`

GetLongDescription returns the LongDescription field if non-nil, zero value otherwise.

### GetLongDescriptionOk

`func (o *AllocationRoomTypeInfoType) GetLongDescriptionOk() (*string, bool)`

GetLongDescriptionOk returns a tuple with the LongDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongDescription

`func (o *AllocationRoomTypeInfoType) SetLongDescription(v string)`

SetLongDescription sets LongDescription field to given value.

### HasLongDescription

`func (o *AllocationRoomTypeInfoType) HasLongDescription() bool`

HasLongDescription returns a boolean if a field has been set.

### GetPromotionCode

`func (o *AllocationRoomTypeInfoType) GetPromotionCode() string`

GetPromotionCode returns the PromotionCode field if non-nil, zero value otherwise.

### GetPromotionCodeOk

`func (o *AllocationRoomTypeInfoType) GetPromotionCodeOk() (*string, bool)`

GetPromotionCodeOk returns a tuple with the PromotionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPromotionCode

`func (o *AllocationRoomTypeInfoType) SetPromotionCode(v string)`

SetPromotionCode sets PromotionCode field to given value.

### HasPromotionCode

`func (o *AllocationRoomTypeInfoType) HasPromotionCode() bool`

HasPromotionCode returns a boolean if a field has been set.

### GetRoomClass

`func (o *AllocationRoomTypeInfoType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *AllocationRoomTypeInfoType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *AllocationRoomTypeInfoType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *AllocationRoomTypeInfoType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomFeatures

`func (o *AllocationRoomTypeInfoType) GetRoomFeatures() RoomFeaturesType`

GetRoomFeatures returns the RoomFeatures field if non-nil, zero value otherwise.

### GetRoomFeaturesOk

`func (o *AllocationRoomTypeInfoType) GetRoomFeaturesOk() (*RoomFeaturesType, bool)`

GetRoomFeaturesOk returns a tuple with the RoomFeatures field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomFeatures

`func (o *AllocationRoomTypeInfoType) SetRoomFeatures(v RoomFeaturesType)`

SetRoomFeatures sets RoomFeatures field to given value.

### HasRoomFeatures

`func (o *AllocationRoomTypeInfoType) HasRoomFeatures() bool`

HasRoomFeatures returns a boolean if a field has been set.

### GetRoomQualifierCode

`func (o *AllocationRoomTypeInfoType) GetRoomQualifierCode() string`

GetRoomQualifierCode returns the RoomQualifierCode field if non-nil, zero value otherwise.

### GetRoomQualifierCodeOk

`func (o *AllocationRoomTypeInfoType) GetRoomQualifierCodeOk() (*string, bool)`

GetRoomQualifierCodeOk returns a tuple with the RoomQualifierCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomQualifierCode

`func (o *AllocationRoomTypeInfoType) SetRoomQualifierCode(v string)`

SetRoomQualifierCode sets RoomQualifierCode field to given value.

### HasRoomQualifierCode

`func (o *AllocationRoomTypeInfoType) HasRoomQualifierCode() bool`

HasRoomQualifierCode returns a boolean if a field has been set.

### GetRoomQualifierMatchIndicator

`func (o *AllocationRoomTypeInfoType) GetRoomQualifierMatchIndicator() string`

GetRoomQualifierMatchIndicator returns the RoomQualifierMatchIndicator field if non-nil, zero value otherwise.

### GetRoomQualifierMatchIndicatorOk

`func (o *AllocationRoomTypeInfoType) GetRoomQualifierMatchIndicatorOk() (*string, bool)`

GetRoomQualifierMatchIndicatorOk returns a tuple with the RoomQualifierMatchIndicator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomQualifierMatchIndicator

`func (o *AllocationRoomTypeInfoType) SetRoomQualifierMatchIndicator(v string)`

SetRoomQualifierMatchIndicator sets RoomQualifierMatchIndicator field to given value.

### HasRoomQualifierMatchIndicator

`func (o *AllocationRoomTypeInfoType) HasRoomQualifierMatchIndicator() bool`

HasRoomQualifierMatchIndicator returns a boolean if a field has been set.

### GetRoomType

`func (o *AllocationRoomTypeInfoType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *AllocationRoomTypeInfoType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *AllocationRoomTypeInfoType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *AllocationRoomTypeInfoType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomTypeAttributes

`func (o *AllocationRoomTypeInfoType) GetRoomTypeAttributes() RoomTypeAttributesType`

GetRoomTypeAttributes returns the RoomTypeAttributes field if non-nil, zero value otherwise.

### GetRoomTypeAttributesOk

`func (o *AllocationRoomTypeInfoType) GetRoomTypeAttributesOk() (*RoomTypeAttributesType, bool)`

GetRoomTypeAttributesOk returns a tuple with the RoomTypeAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypeAttributes

`func (o *AllocationRoomTypeInfoType) SetRoomTypeAttributes(v RoomTypeAttributesType)`

SetRoomTypeAttributes sets RoomTypeAttributes field to given value.

### HasRoomTypeAttributes

`func (o *AllocationRoomTypeInfoType) HasRoomTypeAttributes() bool`

HasRoomTypeAttributes returns a boolean if a field has been set.

### GetRoomViewCode

`func (o *AllocationRoomTypeInfoType) GetRoomViewCode() string`

GetRoomViewCode returns the RoomViewCode field if non-nil, zero value otherwise.

### GetRoomViewCodeOk

`func (o *AllocationRoomTypeInfoType) GetRoomViewCodeOk() (*string, bool)`

GetRoomViewCodeOk returns a tuple with the RoomViewCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomViewCode

`func (o *AllocationRoomTypeInfoType) SetRoomViewCode(v string)`

SetRoomViewCode sets RoomViewCode field to given value.

### HasRoomViewCode

`func (o *AllocationRoomTypeInfoType) HasRoomViewCode() bool`

HasRoomViewCode returns a boolean if a field has been set.

### GetSuite

`func (o *AllocationRoomTypeInfoType) GetSuite() bool`

GetSuite returns the Suite field if non-nil, zero value otherwise.

### GetSuiteOk

`func (o *AllocationRoomTypeInfoType) GetSuiteOk() (*bool, bool)`

GetSuiteOk returns a tuple with the Suite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuite

`func (o *AllocationRoomTypeInfoType) SetSuite(v bool)`

SetSuite sets Suite field to given value.

### HasSuite

`func (o *AllocationRoomTypeInfoType) HasSuite() bool`

HasSuite returns a boolean if a field has been set.

### GetWebName

`func (o *AllocationRoomTypeInfoType) GetWebName() string`

GetWebName returns the WebName field if non-nil, zero value otherwise.

### GetWebNameOk

`func (o *AllocationRoomTypeInfoType) GetWebNameOk() (*string, bool)`

GetWebNameOk returns a tuple with the WebName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebName

`func (o *AllocationRoomTypeInfoType) SetWebName(v string)`

SetWebName sets WebName field to given value.

### HasWebName

`func (o *AllocationRoomTypeInfoType) HasWebName() bool`

HasWebName returns a boolean if a field has been set.

### GetWebPage

`func (o *AllocationRoomTypeInfoType) GetWebPage() string`

GetWebPage returns the WebPage field if non-nil, zero value otherwise.

### GetWebPageOk

`func (o *AllocationRoomTypeInfoType) GetWebPageOk() (*string, bool)`

GetWebPageOk returns a tuple with the WebPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebPage

`func (o *AllocationRoomTypeInfoType) SetWebPage(v string)`

SetWebPage sets WebPage field to given value.

### HasWebPage

`func (o *AllocationRoomTypeInfoType) HasWebPage() bool`

HasWebPage returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


